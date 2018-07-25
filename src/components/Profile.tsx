import * as React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import Video from 'react-native-video';
// import {IAppState} from '../reducers';

const { connect } = require('react-redux');
const ReactElements = require('react-native-elements');

// @connect(
//   (state: IAppState) => {
//     console.log('state: ', state);
//   },
// )
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

  // public componentWillMount() {

  // }

  public render() {
    return(
      <View style={styles.container}>
        <ScrollView style={styles.scrollStyle}>
          <View style={styles.top}>
            <View style={styles.imageContainerStyle}>
              <Image
                style={styles.profileImageStyle}
                source={{uri: 'file:///Users/michal/Desktop/profile.png'}}
              />
            </View>
            <View style={styles.userInfoStyle}>
              <Text style={[styles.userInfoTextStyle, styles.usernameStyle]}>John Smith</Text>
              <Text style={[styles.userInfoTextStyle]}>Independent Advisor</Text>
              <Text style={[styles.userInfoTextStyle]}>Sackett Financial</Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={[styles.ratingContainerStyle, styles.bottomShelf]}>
              <Text style={styles.headerText}>Rating</Text>
              <View style={styles.ratingStyle}>
                <Text style={[styles.headerText, {fontSize: 22, marginRight: 30}]}>4.5</Text>
                {this.renderStars()}
              </View>
            </View>
            <View style={[styles.skilsContainerStyle, styles.bottomShelf]}>
              <Text style={styles.headerText}>Skils</Text>
            </View>
            <View style={[styles.aboutContainerStyle, styles.bottomShelf]}>
              <Text style={styles.headerText}>About Me</Text>
              <Text style={styles.mainTextStyle}></Text>
            </View>
            <View style={[styles.nonprofitContainerStyle, styles.bottomShelf]}>
              <Text style={styles.headerText}>Nonprofit Work</Text>
              <Text style={styles.mainTextStyle}></Text>
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

  private renderVideos = () => {
    return null;
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
    backgroundColor: '#FFF',
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
  skilsContainerStyle: {
    
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
  },
  mainTextStyle: {
    color: '#838383',
  },
});
