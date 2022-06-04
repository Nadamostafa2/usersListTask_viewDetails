import {
  AspectRatio ,
  Text,
  Image ,
  Center,
  Box,Stack,
  Heading,HStack,
} from 'native-base';
import { useContext, useEffect } from "react";
import { getUserDetails } from "../actions";
import { usersContext } from "../context";

export const UserDetails = ({ route }) => {
  const { id } = route.params;

  const resolve = async () => {
    dispatch(await getUserDetails(id));
  };
  useEffect(() => {
    if (id) resolve();

    return () => dispatch({ type: "CLEAR" });
  }, []);
  const { state, dispatch } = useContext(usersContext);
  const user = state.users.details;

  if (!user) return <Text>Loading ...</Text>;
  return (
       <Box style={{flex:1,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center'}}>
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
          }} _web={{
            shadow: 2,
            borderWidth: 0
          }} _light={{
            backgroundColor: "gray.50"
          }}>
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image source={{
                  uri: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }} alt="image" />
                </AspectRatio>
                
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md"_light={{
                  color: "violet.500"
                }} ml="-1">
                  {user.name}
                  </Heading>
                  
                </Stack>
                <Text fontWeight="400">
                  {user.email}
                
                </Text>
                <Text fontWeight="400">
                 
                {user.phone}
                </Text>
                <HStack alignItems="center" space={4} justifyContent="space-between">
                 
                </HStack>
              </Stack>
            </Box>
          </Box>
      
  );
};
