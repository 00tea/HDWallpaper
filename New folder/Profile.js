import React, { Component } from 'react';
import { StyleSheet, Text, View ,FlatList,Image,SafeAreaView} from 'react-native';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//     imageURL: 'https://i.ytimg.com/vi/vHGqYkv0Vj4/hqdefault.jpg'
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//     imageURL: 'https://images-eu.ssl-images-amazon.com/images/I/61iwElTo6ML.jpg'
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//     imageURL: 'https://i.pinimg.com/originals/99/59/1b/99591bbc318ecd41ae7bbf39a9106e12.jpg'
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
    
//   imageURL: 'https://c.wallhere.com/photos/76/a5/anime_anime_girls_digital_art_artwork_2D_portrait_display_vertical_Kochou_Shinobu-1660961.jpg!d'
//   },
// ];

// function Item({ title,imageURL }) {
//   return (
//     <View style={styles.item}>
     
//       <Text style={styles.title}>{title}</Text>
//       <Image style={{width:70,height:70}} source= {{uri:imageURL }} ></Image>
//     </View>
//   );
// }

export   class   Profile extends Component {
  constructor(){
    super()
    this.state = {
      dataSource:[]
    }
  }
   renderItem = ({item})=>{
    return(
      <View style = {{flex:1,flexDirection:'row',marginBottom:3}}>
      <Image style={{width:80,height:80,margin:5}}
      source = {{uri: item.url_l}}
      ></Image>
       <View style={{flex:1,justifyContent:'center',margin:5}}>
         <Text>
           {item.book_title}
         </Text>
         <Text>
           {item.author}
         </Text>
       </View>
    </View>
    )
    
   

   }
   componentDidMount(){
    const url ='https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=d563ba7735076d92449b15bb29d210eb&user_id=187015156%40N07&extras=views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&format=json&nojsoncallback=1'
    fetch(url)
    .then((Response) => Response.json())
    .then((ResponseJson)=>{
this.setState({dataSource : ResponseJson.photos.photo})
    })
    .catch((error)=>{
      Console.log(error)
    })

   }

    render(){
  return (
    
      <View style={styles.container}>
      <FlatList
        data={this.state.dataSource}
        renderItem= {this.renderItem}
      />
    </View>
  
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,}

  });
