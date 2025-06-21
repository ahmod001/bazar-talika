import Content from '@/components/content';
import ContactInfo from '@/components/lib/ContactInfo';
import React from 'react';
import { ScrollView } from 'react-native';
import Constants from 'expo-constants';

const version = Constants.expoConfig?.version || '1.0.0';
const About = () => {
    return (
        <ScrollView className="bg-white p-4">

            <Content.Block>
                App Name: বাজার তালিকা:Shopping List{'\n'}
                Version: {version}{'\n'}
                Developer: Ahmod Hasan
            </Content.Block>

            <Content.Title>
                Purpose
            </Content.Title>
            <Content.Block>
                This app was built to help users easily create and manage their shopping lists —
                from groceries to clothing or anything else they plan to buy from the market.
                Simple, fast, and completely offline.
            </Content.Block>

            <Content.Title>
                Offline & Private
            </Content.Title>
            <Content.Block>
                Your data stays only on your phone. No internet needed, no personal data collected.
                Just open the app and start listing.
            </Content.Block>

            <ContactInfo />

            <Content.Block>
                Made with ❤️ in Bangladesh
            </Content.Block>
        </ScrollView>
    );
};



export default About;
