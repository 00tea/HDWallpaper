import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image,TouchableOpacity } from 'react-native';
export function Profile({ route, navigation }) {
    const [mang, setMang] = useState();
    fetch('https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=d563ba7735076d92449b15bb29d210eb&user_id=187015156%40N07&extras=views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&format=json&nojsoncallback=1%27')
        .then(response => response.json())
        .then(json => setMang(json.photos.photo))

    
        
    return (
        <View style={{backgroundColor:'lightblue'}}>
            <FlatList
                style={{ marginTop: 20 }}
                data={mang}
                numColumns={2}
                horizontal={false}
                renderItem={({ item }) =>
                    <View
                        style={{ width: '95%',height:180, borderWidth: 1, borderRadius: 10, margin:8 }}>

                     <TouchableOpacity onPress = {()=>{
                     
                       navigation.navigate('Image',{name: item.url_l});
                     }}  > 
                             

                       <Image style={{ width: '100%',height:'100%', borderRadius: 10 }  } 
                            source={{ uri: item.url_l }} />
                            </TouchableOpacity>  
                    </View>
                }
                keyExtractor={item => item.id}
            />
        </View>
    );
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'ligtblue',
            alignItems: 'center',
            justifyContent: 'center',
        }
    });

}