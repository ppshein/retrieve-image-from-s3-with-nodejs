import { Component } from 'react';
import style from './style';

export default class BannerLogo extends Component {
	render() {
		if (this.props.image) {
			return (
				<div class={style.withpreview}><img src={'https://mytest.com/image/' + this.props.image} /></div>
			);
		} else {
			return (
				<div class={style.withoutpreview} />
			);
		}
	}
}