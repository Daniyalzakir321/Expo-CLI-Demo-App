import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Video } from 'expo-av';
// import { WebView } from 'react-native-webview';
import { Button, TouchableOpacity, Image, FlatList,ScrollView } from 'react-native';
import { Avatar, Card, Title, Paragraph, FAB } from 'react-native-paper';
// import * as FacebookAds from 'expo-ads-facebook';
// import { AdMobBanner, AdMobInterstitial,  PublisherBanner, AdMobRewarded, setTestDeviceIDAsync} from 'expo-ads-admob';
// import { TextInput } from 'react-native-web';



const Home = () => {

    const data =
        [{ id: 1, name: 'Daniyal Zakir', position: 'Front End Dev' },
        { id: 2, name: 'Haris Khan', position: 'Fll Stack Dev' },
        { id: 3, name: 'Abdullah Khan', position: 'Back End Dev' },
        { id: 4, name: 'Fahad Wakeel', position: 'ML Expert' },
        { id: 5, name: 'Danyal Zakir', position: 'Front End Dev' },
        { id: 6, name: 'Harry Khan', position: 'Fll Stack Dev' },
        { id: 7, name: 'Abdullah Khan', position: 'Back End Dev' },
        { id: 8, name: 'Faraz Wakeel', position: 'ML Expert' },
        { id: 9, name: 'Danish Zakir', position: 'Front End Dev' },
        { id: 10, name: 'Fahad Wakeel', position: 'ML Expert' },
        { id: 11, name: 'Daniyal Zakir', position: 'Front End Dev' },
   

        ]


    const renderList = data.map((items) => {
        return (

            <View style={styles.container}>

                <Card style={styles.card} key={'id.items'}>
                    <View style={styles.cardview}>
                        <Image source={{ uri: "https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png" }} style={{ width: 60, height: 60 }} />
                        <View>
                            <Text style={styles.text}>{items.name}</Text>
                            <Text style={styles.textdeveloper}>{items.position}</Text>
                        </View>
                    </View>
                </Card>
            </View>

        );    //return

    })       //renderList



    return (
        <ScrollView>
                {renderList}


        </ScrollView>
    );



}  //Home 


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FBFBFB',
    },


    card: {
        backgroundColor: '#fff',
        margin: 7,
        padding: 5,

    },


    cardview: {
        flexDirection: 'row',
    },


    text: {
        fontSize: 17,
        fontWeight: 'bold',
        textShadowColor: 'white',
        paddingTop: 7,
        paddingLeft: 7,

    },


    textdeveloper: {
        fontSize: 14,
        textShadowColor: 'white',
        paddingTop: 0,
        paddingLeft: 7,

    },






});



export default Home;
















{/* <Text style={styles.c}>Web Vddddddddddddddddddddiewer</Text> */ }


{/* <WebView source={{ uri: 'https://www.youtube.com/results?search_query=flutter+monitization' }} style={{ marginTop: 0 }} /> */ }


{/* <Text style={styles.c}>Hello World</Text> */ }
{/* <Text>Demo Text</Text> */ }


{/* <Video
        source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: 350, height: 220 }}
      /> */}



{/* <Image source={{ uri: "https://media0.giphy.com/media/d7NpA5D3kfZS3Nr1AZ/source.gif" }} style={{ width: 405, height: 300 }} /> */ }
{/* <Image source={logo} style={{ width: 305, height: 159 }} />  */ }
{/* 
      <TouchableOpacity
        onPress={() => alert('Button Kyu Dbaya')}
        style={{ backgroundColor: 'red', borderRadius: 10, marginTop: 10 }}>
        <Text style={{ fontSize: 20, color: '#fff', width: 200, textAlign: 'center' }}>Video Embed</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('Under Construction                                    "Visit After Some Time" ')}
        style={{ backgroundColor: 'blue', borderRadius: 10, marginTop: 10 }}>
        <Text style={{ fontSize: 20, color: '#fff', width: 150, textAlign: 'center' }}>2nd Screen</Text>
      </TouchableOpacity> */}


{/* <FacebookAds.BannerAd
        placementId="IMG_16_9_APP_INSTALL"
        type="standard"
        onPress={() => console.log('click')}
        onError={error => console.log('error', error)}
      /> */}


{/* <AdMobBanner
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
      servePersonalizedAds // true or false
      onDidFailToReceiveAdWithError={this.bannerError} /> */}
