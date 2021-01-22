import Animal from './Animal/Animal'
import {Component} from 'react'
import Container from './Container/Container'
import axios from "axios";
import s from "./Main.module.css"

export default class Main extends Component {
    state = {
        data: ['https://cdn2.thecatapi.com/images/MTc5MTY4MA.jpg']
    }
    getData = async(n = 3) => {
        for (let i = 0; i < n; i++) {
            await axios
                .get('https://api.thecatapi.com/v1/images/search?limit=1&size=full&sub_id=demo-ca64b5')
                .then(res => {
                    let t = true;
                    for (let k = 0; k < this.state.data.length; k++) {
                        if (this.state.data[k] === res.data[0]['url']) {
                            k = this.state.data.length
                            n++;
                            t = false
                        }
                    }
                    if (t) {
                        let newData = this.state.data;
                        newData.push(res.data[0]['url'])
                        this.setState({data: newData})
                    }
                })
        }
    }
    componentDidMount() {
        this
            .getData()
            .then(res => this.getData(7))
    }
    render() {
        const item = this
            .state
            .data
            .map((animal, i) => {
                const display = 0 === i
                    ? true
                    : false
                return (<Animal
                    imgSrc={animal}
                    display={display}
                    key={animal.substring(animal.lastIndexOf("/") + 1)}/>)
            })
        const update = (type) => {
            const imgSrc = this.state.data[0]
            const newData = this.state.data;
            newData.shift()
            this.setState({data: newData})
            if (this.state.data.length < 12) {
                this.getData(20);
            }
            if (type === "like") {
                let like = [...this.props.liked];
                let t = true;
                for (let i = 0; i < like.length; i++) {
                    if (like[i] === imgSrc) {
                        i = like.length;
                        t = false
                    }
                }
                if (t) {
                    like.unshift(imgSrc)
                    this
                        .props
                        .setLike(like);
                    localStorage.setItem('liked',JSON.stringify(like))
                }
            }
        }

        return (
            <div>
                <div className={s.card}>
                    <div>
                        <button className="btn btn-success" onClick={() => update('like')}>Like</button>
                    </div>
                    <Container>
                        {item}
                    </Container>

                    <div>
                        <button className="btn btn-danger" onClick={() => update('dislike')}>Dislike</button>
                    </div>
                </div>
            </div>
        )
    }
}