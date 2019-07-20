import 'aframe'
import { Entity, Scene, Animation } from 'aframe-react';
import React, { Component } from 'react';
import profil from '../profil.jpg';
import History from "../history"
class HomePage extends Component {

    render() {
        return (
            <div>
                <Scene>
                    <Entity
                        animation__click={{ property: 'position', startEvents: 'click', from: '-5 0 -20', to: '0 0 -5', dur: 1500 }}
                        events={{click: () => setTimeout(() => {
                            History.push('/blog')
                        }, 1500)}}
                        src="https://raw.githubusercontent.com/aframevr/sample-assets/master/assets/images/space/earth_atmos_4096.jpg"
                        radius="2"
                        primitive="a-sphere"
                        segments-height="84"
                        position="-5 0 -20"
                    >
                    </Entity>
                    <Entity
                        animation__click={{ property: 'position', startEvents: 'click', from: '-10 0 -20', to: '0 0 -5', dur: 1500 }}
                        events={{
                            click: () => setTimeout(() => {
                                History.push('/contactme')
                            }, 1500)
                        }}
                        radius="2"
                        primitive="a-sphere"
                        segments-height="84"
                        position="-10 0 -20"
                    />
                    <Entity
                        animation__click={{ property: 'position', startEvents: 'click', from: '5 0 -20', to: '0 0 -5', dur: 1500 }}
                        events={{
                            click: () => setTimeout(() => {
                                History.push('/about')
                            }, 1500)
                        }}
                        primitive="a-sphere"
                        segments-height="84"
                        rotation="0 240 0"
                        position="5 0 -20"
                    />
                    <Entity
                        animation__click={{ property: 'position', startEvents: 'click', from: '10 0 -20', to: '0 0 -5', dur: 1500 }}
                        events={{
                            click: () => setTimeout(() => {
                                History.push('/about')
                            }, 1500)
                        }}
                        radius="2"
                        primitive="a-sphere"
                        segments-height="84"
                        rotation="0 120 0"
                        position="10 0 -20"
                    />
                    <Entity primitive="a-camera" user-height='0' position="0 0 -5">
                        <Entity primitive="a-cursor" color="#fc0000" />
                    </Entity>
                    <Entity position="-10 -10 -10" primitive="a-sky" color="#000" />
                </Scene>

            </div>);
    }
}

export default HomePage;