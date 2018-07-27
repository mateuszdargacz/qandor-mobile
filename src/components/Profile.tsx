import * as React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
import {IAppState} from '../reducers';

const { connect } = require('react-redux');
const ReactElements = require('react-native-elements');

import { getProfile, clearProfile } from '../actions/ProfileActions';
import {ArrowBack} from './common/ArrowBack';

@connect(
  (state: IAppState) => {
    const { profile } = state;
    return { profile }
  }, { getProfile, clearProfile },
)
export default class Profile extends React.Component<any, any> {
  public static navigationOptions = ({navigation, screenProps}: any) => {
    const {params} = navigation.state;
    return({
      title: 'Profile',
      headerLeft:
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBack/>
        </TouchableOpacity>,
      tabBarIcon: () => (
        <Image
          source={require('../../assets/icons/message_icon.png')}
          style={{width: 30, height: 30}}
        />
      ),
    });
  }

  constructor(props: any) {
    super(props);
  }

  public componentWillUnmount() {
    this.props.clearProfile();
  }

  public render() {
    const {profile} = this.props;
    const revileStars = profile.rating * 29 + (Math.floor(profile.rating) - 1) * 7;
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
    const {videos} = this.props.profile;
    console.log('videos: ', videos);
    return videos.map((video: string, index: number) => (
      <View style={styles.videosBucketStyle} key={index}>
        <Video
          source={{uri: video}}
          style={styles.videoStyle}
          paused={true}
        />
      </View>
    ));
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
    const { rating } = this.props.profile;
    const percent = 100 - ((rating - Math.floor(rating)) * 100);
    const array = [];
    let i = 0;
    while (i < Math.ceil(rating) && i < 5) {
      array.push(i);
      i++;
    }
    console.log('array: ', array, rating, percent);
    return (
      array.map((item, index) => {
        if (index < Math.floor(rating)) {
          return (
            <View key={`${index}`}>
              <ReactElements.Icon
              name="star"
              color="#12cf6e"
              type="material"
              size={35}
              iconStyle={styles.starStyle}
              />
            </View>
          );
        }
        else if (rating - Math.floor(rating) > 0) {
          return (
            <View key={`${index}`}>
              <ReactElements.Icon
              name="star"
              color="#12cf6e"
              type="material"
              size={35}
              iconStyle={styles.starStyle}
              />
              <View style={[styles.starCover, {width: `${percent}%`}]}></View>
            </View>
          );
        }
      })
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
    height: 40,
    backgroundColor: '#fff',
    position: 'absolute',
    top: -5,
    right: 0,
    // opacity: 0.4,
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
  videosBucketStyle: {
    width: 120,
    height: 80,
    margin: 10,
    marginLeft: 0,
    marginRight: 20,
    backgroundColor: '#ddd',
  },
  videoStyle: {
    height: '100%',
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

