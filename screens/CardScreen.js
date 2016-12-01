import React from 'react';
import {
  Image,
  // Text,
  View,
  StyleSheet,
} from 'react-native';

import { Container, Content, Card, CardItem, Thumbnail, Text, H3, Button, Icon } from 'native-base';
import Toast from 'react-native-root-toast';

export default class CardScreen extends React.Component {
  constructor() {
      super(...arguments);
      this.state = {
          visible: false
      };
  }

  static route = {
    navigationBar: {
      title: 'Card Screen',
      renderBackButton: () => { <Button>Back</Button> },
    },
  }

  componentDidMount() {
    setTimeout(() => this.setState({
        visible: true
    }), 2000); // show toast after 2s

    setTimeout(() => this.setState({
        visible: false
    }), 5000); // hide toast after 5s
  }

  render() {

    return (
      <View>
        <Card style={{ flex: 0 }}>
        
            <CardItem>
            <Thumbnail source={{uri: "https://pbs.twimg.com/profile_images/659097483226681344/xasgu0Rm_reasonably_small.png"}} />
            <H3>Chris Geirman</H3>
            <Text note>React Native Developer</Text>
            </CardItem>
            
            <CardItem>
            <Image 
                style={{ resizeMode: "cover", width: null }}
                source={{uri: "https://scontent.xx.fbcdn.net/t31.0-8/15111082_10154145522367029_8152295376517298161_o.jpg"}}
                />
            </CardItem>
            
            <CardItem>
            <Button transparent>
                <Icon name="logo-github" />
                1,969
            </Button>
            </CardItem>
        </Card>
        <Toast
            visible={this.state.visible}
            position={50}
            shadow={false}
            animation={false}
            hideOnPress={true}
        >My Toast Message</Toast>
        </View>
    );
  }
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});


