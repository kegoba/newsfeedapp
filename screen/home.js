import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Axios from "axios"
import { StyleSheet, Text, View } from 'react-native';

const NewsFeed = () => {
    const [count, setCount] = useState(0);
    
    axios.get('http://newsapi.org/v2/top-headlines?'+'sources=bbc-news&'+'dae7ff16f86b41ac8ff7ff2cf37794c1')
        .then((res)=> {
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
        });
    return (
        <div className="container">
            <p>You clicked {count} times</p>
            <button
                onClick={() => setCount(count + 1)}>
                Click me!
      </button>
        </div>
    );
};





//'http://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'dae7ff16f86b41ac8ff7ff2cf37794c1'