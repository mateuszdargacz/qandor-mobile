import * as React from 'react';
import {Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const { connect } = require('react-redux');

import {IAppState, IMember} from '../reducers';
import { getTeam } from '../actions/TeamActions';
import { getProfile } from '../actions/ProfileActions';
import TeamMember from './TeamMember';
import TeamAddMember from './TeamAddMember';
import {chunkArray} from './Utils';
import {ArrowBack} from './common/ArrowBack';
import {Overlay} from './common/Overlay';

@connect(
  (state: IAppState) => {
    const { team } = state;
    return { team };
  }, { getTeam, getProfile },
)
export default class Team extends React.Component<any, any> {
  public static navigationOptions = ({navigation}: any) => {
    const {params} = navigation.state;
    return ({
      headerLeft:
        <View>
          {
            params && params.title === "Add a Team Member" ?
              <TouchableOpacity onPress={() => params.goBack() || null}>
                <ArrowBack/>
              </TouchableOpacity> : null
          }
        </View>,
      title:
        <Text style={{fontFamily: 'Montserrat-Bold'}}>
        {
          navigation.state.params ?
            params.title : "Team"
        }
        </Text>,
      tabBarIcon: () => (
        <Image
          source={require('../../assets/icons/team_icon.png')}
          style={{width: 45, height: 30}}
        />
      ),
    });
  };

  constructor(props: any) {
    super(props);
    this.state = {
      addMemberModal: false,
      addMemberPosition: '',
    };
  }

  public componentWillMount() {
    this.props.getTeam();
  }

  private findMemberWithPosition = (position: string) => {
    const {members} = this.props.team;
    return members.find((member: IMember) => member.position === position) || null
  }

  private membersWithOutPosition = () => {
    const {members} = this.props.team;
    return members.filter((member: IMember) => member.position === "")
  }

  private closeAddMember = () => {
    const {navigation} = this.props;
    navigation.setParams({
      title: "Team",
      goBack: null
    });
    this.setState({addMemberModal: false, addMemberPosition: ''});
  }

  private handlePress = (member: any, position: string) => {
    if (member) {
      this.props.getProfile(member.userID)
    }
    else {
      this.setState({addMemberModal: true, addMemberPosition: position || ''});
      const {navigation} = this.props;
      navigation.setParams({
        title: "Add a Team Member",
        goBack: this.closeAddMember,
      });
    }
  }

  private renterMember = (position: string, member: any) => (
    <TeamMember position={position} member={member} onPress={() => this.handlePress(member, position)}/>
  )

  private renderRestOfMembers = (restOfTeam: any) => {
    if (restOfTeam.length % 2 === 0) {
      restOfTeam.push(null)
    }
    const pairs = chunkArray(restOfTeam, 2);
    return pairs.map((pair: any, index: number) => (
      <View style={styles.memberPairStyle} key={index}>
        {this.renterMember("", pair[0] || null)}
        {this.renterMember("", pair[1] || null)}
      </View>
    ));
  }

  public render() {
    const restOfTeam = this.membersWithOutPosition();
    const {recomended} = this.props.team;
    return(
      <View style={styles.container}>
        <TeamAddMember show={this.state.addMemberModal} position={this.state.addMemberPosition} recomended={recomended}/>
        <Overlay show={this.state.addMemberModal}/>
        <ScrollView contentContainerStyle={styles.scrollStyle}>
          <View style={{flex: 1, alignItems: 'center',}}>
            <View style={styles.memberPairStyle}>
              {this.renterMember("Financial Advisor", this.findMemberWithPosition("Financial Advisor"))}
              {this.renterMember("Independent Advisor", this.findMemberWithPosition("Independent Advisor"))}
            </View>
            <View style={styles.memberPairStyle}>
              {this.renterMember("Insurence Agent", this.findMemberWithPosition("Insurence Agent"))}
              {this.renterMember("Estate Attorney", this.findMemberWithPosition("Estate Attorney"))}
            </View>
            <View style={styles.memberPairStyle}>
              {this.renterMember("Real Estate Agent", this.findMemberWithPosition("Real Estate Agent"))}
              {
                restOfTeam.length > 0 ?
                this.renterMember("", restOfTeam[0]) :
                this.renterMember("", null)
              }
            </View>
            {
              restOfTeam.length > 1 ?
                this.renderRestOfMembers(restOfTeam.slice(1)) :
                this.renderRestOfMembers([null])
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scrollStyle: {
    width: '100%',
    paddingTop: 20,
  },
  memberPairStyle: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 140,
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.4,
    borderColor: '#ebebeb',
  },
});
