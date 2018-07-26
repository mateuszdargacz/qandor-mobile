import * as React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import Video from 'react-native-video';
import {IAppState} from '../reducers';

const { connect } = require('react-redux');
const ReactElements = require('react-native-elements');

import { getProfile } from '../actions/ProfileActions';

@connect(
  (state: IAppState) => {
    console.log('Profile state: ', state);
    const { profile } = state;
    return { profile }
  }, { getProfile },
)
export default class Profile extends React.Component<any, any> {
  public static navigationOptions = ({navigation, screenProps}: any) => {
    const {params} = navigation.state;
    return({
      title: 'Profile',
      headerLeft:
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ReactElements.Icon
            name="chevron-left"
            type="font-awesome"
            color="#fff"
            iconStyle={styles.backIconStyle}
          />
        </TouchableOpacity>,
    });
  }

  constructor(props: any) {
    super(props);
  }

  public componentWillMount() {
    this.props.getProfile(0);
  }

  public componentWillUnmount() {
    console.log('Profile componentWillUnmount');
  }

  public render() {
    const {profile} = this.props;
    const left = profile.rating * 28 + (Math.floor(profile.rating) - 1) * 7;
    if (profile && profile.name !== '') {
      return(
        <View style={styles.container}>
          <ScrollView style={styles.scrollStyle}>
            <View style={styles.top}>
              <View style={styles.imageContainerStyle}>
                <Image
                  style={styles.profileImageStyle}
                  source={{uri: profile.image}}
                />
              </View>
              <View style={styles.userInfoStyle}>
                <Text style={[styles.userInfoTextStyle, styles.usernameStyle]}>{profile.username}</Text>
                <Text style={[styles.userInfoTextStyle]}>{profile.job1}</Text>
                <Text style={[styles.userInfoTextStyle]}>{profile.job2}</Text>
              </View>
            </View>
            <View style={styles.bottom}>
              <View style={[styles.ratingContainerStyle, styles.bottomShelf]}>
                <Text style={styles.headerText}>Rating</Text>
                <View style={styles.ratingStyle}>
                  <View style={{width: 50}}>
                    <Text style={[styles.headerText, {fontSize: 22}]}>{profile.rating}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    {this.renderStars()}
                    <View style={[styles.starCover, {left}]}></View>
                  </View>
                </View>
              </View>
              <View style={[styles.bottomShelf]}>
                <Text style={styles.headerText}>Skills</Text>
                <View style={styles.skillsContainerStyle}>
                  {this.renderSkills()}
                </View>
              </View>
              <View style={[styles.aboutContainerStyle, styles.bottomShelf]}>
                <Text style={styles.headerText}>About Me</Text>
                <Text style={styles.mainTextStyle}>{profile.aboutMe}</Text>
              </View>
              <View style={[styles.nonprofitContainerStyle, styles.bottomShelf]}>
                <Text style={styles.headerText}>Nonprofit Work</Text>
                <Text style={styles.mainTextStyle}>{profile.nonprofitWork}</Text>
              </View>
              <View style={[styles.videosContainerStyle, styles.bottomShelf]}>
                <Text style={styles.headerText}>Videos</Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                >
                {this.renderVideos()}
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
    else {
      return null;
    }
  }

  private renderVideos = () => {
    return null;
  }

  private renderSkills = () => {
    const { skills } = this.props.profile;
    return (
      skills.map((skill: string, index: number) => (
        <View style={styles.skillBucketStyle} key={index}>
          <Text style={styles.skillTextStyle}>{skill}</Text>
        </View>
      ))
    )
  }

  private renderStars = () => {
    const array = [1, 2, 3, 4, 5];
    return (
      array.map((item, index) => (
        <ReactElements.Icon
          key={`${index}`}
          name="star"
          color="#12cf6e"
          type="material"
          size={35}
          iconStyle={styles.starStyle}
        />
      ))
    );
  }
}

const styles = StyleSheet.create({
  backIconStyle: {
    marginLeft: 15,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scrollStyle: {
    width: '100%',
  },
  top: {
    flex: 1,
    alignItems: 'center',
    margin: 0,
    width: '100%',
    paddingTop: 30,
    height: 300,
    backgroundColor: '#2077f5',
  },
  imageContainerStyle: {

  },
  profileImageStyle: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  userInfoStyle: {

  },
  usernameStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  userInfoTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  bottom: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  bottomShelf: {
    marginBottom: 20,
  },
  ratingContainerStyle: {
    
  },
  ratingStyle: {
    flexDirection: 'row',
    padding: 15,
  },
  starStyle: {
    marginTop: -5,
  },
  starCover: {
    position: 'absolute',
    top: -5,
    marginLeft: 4,
    backgroundColor: '#f00',
    height: 40,
    width: 200,
  },
  skillsContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBucketStyle: {
    backgroundColor: '#2077f5',
    height: 18,
    borderRadius: 9,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 15,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillTextStyle: {
    color: '#fff',
    fontSize: 11,
  },
  aboutContainerStyle: {
    
  },
  nonprofitContainerStyle: {
    
  },
  videosContainerStyle: {
    
  },
  headerText: {
    fontWeight: 'bold',
    color: '#434343',
    marginBottom: 5,
  },
  mainTextStyle: {
    color: '#838383',
  },
});

// 4 28 7
