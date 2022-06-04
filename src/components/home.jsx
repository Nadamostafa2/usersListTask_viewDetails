import {Box,Text,Button,Heading,FlatList,HStack,ArrowForwardIcon,Input} from 'native-base';
import { useContext,useState,useEffect } from 'react';
import {usersContext} from '../context'
import { getUsersList } from '../actions';
export const Home = ({navigation})=>{
    const {state,dispatch} = useContext(usersContext);
    const [list,setList]=useState([]);
let [searchWord,setSearchWord]=useState("");
    const search=(e)=>{
        setSearchWord(e);
        setList(state.users.list.filter( item => item.name.toLowerCase().includes(e.toLowerCase())))  ;

    }


    const resolve = async ()=>{
        dispatch(await getUsersList());
    }
    useEffect(()=>{
        resolve()
    },[])

    return <Box>
        <Heading style={{textAlign:'center'}}>
                Users List
        </Heading>
        <Input  mx="3" placeholder="Input" w="75%" maxWidth="300px" onChangeText={search}/>
   

        <FlatList
        data={searchWord?list:state.users.list||[]}
        renderItem={({item})=>{
            return (
                <Box borderBottomWidth="1" _dark={{
                    borderColor: "gray.600"
                  }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                      <HStack style={{justifyContent:'space-between'}}>  
                             <Text>
                                  {item.name}
                            </Text>
                          <ArrowForwardIcon onPress={()=>{
                              navigation.navigate('Profile',{id:item.id})
                          }}/>
                      </HStack>
                </Box>
            )
        }}
        keyExtractor={(item)=>item.id}
/>
        
    </Box>

}
