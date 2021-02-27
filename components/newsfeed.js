import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, FlatList, Dimensions, Image, TextInput } from 'react-native'
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faComment, faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const { width, height } = Dimensions.get('window')

class  NewsFeed extends Component{
    constructor(props) {
        super(props);
        this.state={
            feed : [],
            search : ""
        }
    };
    handleSearch =(e)=>{
        e.preventDefault()
        this.setState({
            search: e.target.value
        })

    }
componentDidMount() {
        Axios.get('http://newsapi.org/v2/top-headlines?' + 'country=us&' +'apiKey=dae7ff16f86b41ac8ff7ff2cf37794c1')
            .then( (res) => {
                this.setState({
                    feed : res.data.articles
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

  /* formateDate =(json_date)=>{
       
       var currentDate = new Date(json_date).toLocaleTimeString({},
       {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
  );
   }*/

    renderItem = ({ item, index }) => (
        <View style={styles.newsView}>
            
            <View>
                <Text>
                <Image style={styles.image} source={item.urlToImage} />
                <Text style={styles.title}> {item.title.slice(-20)}</Text>
                <Text style={styles.time}> {new Date(item.publishedAt).toLocaleTimeString({},
                    { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                )} </Text>
                <Text style={styles.author}>{item.author} </Text>
                <Text style={styles.time}> {new Date(item.publishedAt).toLocaleTimeString({},
                    { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                )} </Text>
                </Text>
             
                
            </View>
        </View>)
 render(){
     const {feed}= this.state
  
    return (
        <View >
            <View style={styles.container}>
                <Text style={styles.chat}>
                    Search
                </Text>
             </View>
            <View style={styles.search} >
             
            <TextInput
                style={styles.search_input}
                onChange={this.handleSearch}
                value={this.state.search}
                placeholder="Search by user or places"
            />
            </View>
            <Text style={styles.chat}>
                Chats
            </Text>
            <View style={styles.element}>
            <FlatList
                contentContainerStyle={{ backgroundColor: '#fff' }}
               data={feed} 
                renderItem={this.renderItem}
                keyExtractor={(item => 
                item.id
             )}
            />
            </View>
            <Text style={styles.footer}>
            <FontAwesomeIcon style={styles.icons} icon={faHome} />
            <FontAwesomeIcon style={styles.icons} icon={faComment} />
            <FontAwesomeIcon style={styles.icons} icon={faMapMarkerAlt} />
            <FontAwesomeIcon style={styles.icons} icon={faUser} />
            </Text>
            <View>

            </View>
        </View>
    )}
}

const styles = StyleSheet.create({

    newsView: {
        flex: 1,
        justifyContent: 'left',
        alignItems: 'left',
        padding : 0,
        margin : 0,
    },
    title: {
        
        width : 30,

    },
    
    image: {
        height: 50,
        width : 50,
        borderRadius :25,
       
    },
    author: {
        width : 30

    },
    time:{
        alignItems: "right",

        

    },
    element: {
        
    },
    search:{
        alignItems :"center",
        marginLeft : 3
        


    },
    search_input: {
        height: 40,
        width: 300,
        alignItems: "center",
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderShodow: 'solid #fff'


    },
    chat:{
        fontSize :20,
        marginLeft: 10,


    },

    footer : {
        flex: 1,  
        alignItems: "center",
        marginLeft :80

    },
    icons:{
        margin : 10,
        color :'grey',
        fontSize: 20,

    },
    container:{
        backgroundColor :"#fff"
    }

})


export default NewsFeed