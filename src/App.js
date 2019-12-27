import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotroncontainer';
import Card from './components/card';
import Footerx from './components/footer';

const App = (props) => {
    return (
        <>
            <Navbar name="Fernanda Sampaio" />

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <Jumbotron />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Card
                            img="https://i.picsum.photos/id/1025/4951/3301.jpg"
                            text="loremjdkjshduwehdkbdkjfbfwhfñoiñewñfkjbdjckbwifgeiobcdbcvugfewgfugdvdsugeiufgeuv"
                            title="Your beautifull dog" />
                    </div>
                    <div className="col-md-3">
                        <Card img="https://i.picsum.photos/id/1011/5472/3648.jpg"
                            text="loremjdkjshduwehdkbdkjfbfwhfñoiñewñfkjbdjckbwifgeiobcdbcvugfewgfugdvdsugeiufgeuv"
                            title="Your beautifull travel" />
                    </div>
                    <div className="col-md-3">
                        <Card img="https://picsum.photos/id/1010/5184/3456"
                            text="loremjdkjshduwehdkbdkjfbfwhfñoiñewñfkjbdjckbwifgeiobcdbcvugfewgfugdvdsugeiufgeuv"
                            title="Your beautifull kid" />
                    </div>
                    <div className="col-md-3">
                        <Card img="https://i.picsum.photos/id/1/5616/3744.jpg"
                            text="loremjdkjshduwehdkbdkjfbfwhfñoiñewñfkjbdjckbwifgeiobcdbcvugfewgfugdvdsugeiufgeuv"
                            title="Your beautifull job" />
                    </div>
                </div>
                
            </div>
            <Footerx />
        </>
    );
}




export default App;