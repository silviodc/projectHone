import React from 'react';
import Tweet from './Tweet';

export default class Tweets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        };
        this.loadData();
    }

    loadData(path) {
        //
        window.fetch('http://localhost:5001/tweets/getTweet')
        //  window.fetch('./data/exemple.json')
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(res => {
                this.setState({tweets: res.tweets});

            })
            .catch(error => console.error('Error:', error))
    }

    render() {
        return (
            <div>
                <section className="bg-blue" id="home">
                    <div className="container padding-150" >
                        <div className="row text-center">
                            <div className="col-md-12" id="tweets">
                                <h1 className="font-70 text-dark">Tweets </h1><br/>
                                <main>
                                    {
                                        this.state.tweets.map((tweet, i) => {
                                           var analyze="None";
                                           if (tweet.sentiment[0]>0.25){
                                             analyze = "Positive";
                                           }else if (tweet.sentiment[0]>=0){
                                             analyze = "Neutre";
                                           } else{
                                              analyze = "Negative";
                                           }
                                            return <Tweet author={tweet.author} text={tweet.tweet} sentiment={analyze}/>
                                        })
                                    }
                                </main>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-cloud" id="presentation">
                    <div className="container padding-150">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h1 className="font-70 text-dark">Presentation<br/></h1>
                                <hr/><br/>
                                    <p className="font-40 text-cloud text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquid consectetur cumque,
                                        deleniti doloremque ex expedita fugiat labore laborum mollitia officia, perferendis porro quod sapiente sed sequi soluta ut!</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}
