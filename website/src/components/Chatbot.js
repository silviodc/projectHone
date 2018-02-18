//REACT
import React, { Component } from 'react';
//Bot
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
//CSS
import '../style/css/bot.css';

export default class Chatbot extends Component {



    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.toggleFloating = this.toggleFloating.bind(this);
    }
    theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#EF6C00',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#EF6C00',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#fff',
    };

    toggleFloating() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {


        return (
            <div>
                <ChatBot
                    steps={[
                        {
                            id: '0',
                            message: 'Vous cherchez des informations ?',
                            trigger: '2',
                        },
                        {
                            id: '1',
                            message: 'Une autre question ?',
                            trigger: '2',
                        },
                        {
                            id: '2',
                            options: [
                                { value: 1, label: 'Le concept ?', trigger: '4' },
                                { value: 2, label: 'Votre Twitter', trigger: '3' },
                                { value: 3, label: 'Qui êtes-vous ?', trigger: '5' },
                            ],
                        },
                        {
                            id: '3',
                            message: 'lien twitter ici',
                            trigger: '1'
                        },
                        {
                            id: '4',
                            message: 'Le concept est ...',
                            trigger: '1'
                        },
                        {
                            id: '5',
                            message: 'Nous sommes ...',
                            trigger: '1'
                        }
                    ]}
                    floating={true}
                    toggleFloating={this.toggleFloating}
                    opened={this.state.open}
                    headerTitle="Twot"
                    botAvatar="./img/logo.svg"
                    placeholder="Tapez votre recherche..."
                    theme={this.theme}
                />
            </div>
        );
    }
}