import React, {useState} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styled from 'styled-components';
import TextPoke from './src/components/text';

// const TextPoke = styled.Text`
//   padding-top: 15px
//   text-align: center;
//   padding-top: 80%;
//   font-size: 85px;
//   `

export default function App() {
  return(
    <ImageBackground
      source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be9aa924-688f-4299-b961-0cf8a1c6c58d/d7h52e1-41dd26b3-a222-43e0-a948-763299800f8a.png/v1/fill/w_600,h_1067,q_80,strp/kalos_pokedex_wallpaper_by_kalosdex_d7h52e1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcL2JlOWFhOTI0LTY4OGYtNDI5OS1iOTYxLTBjZjhhMWM2YzU4ZFwvZDdoNTJlMS00MWRkMjZiMy1hMjIyLTQzZTAtYTk0OC03NjMyOTk4MDBmOGEucG5nIiwid2lkdGgiOiI8PTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.H00hk_aFEm31_k-4H0of4fDoq8SF5OKiaVZhDUD3b2s' }}
      style={{ width: '100%', height: '100%' }}
    >
    <View>
      <TextPoke font_size= {85} paddingTop={310}>Pokedex</TextPoke>
    </View>
    </ImageBackground>
  )
}