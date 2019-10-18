import { IntegerUtils } from './IntegerUtils';

export class Post {
	
	private title: string;
	private content: string;
	private loveIts: number;
	private createdAt: Date;
	
	constructor() {	}
	
	static generateDate() {
		let year = IntegerUtils.generateNumber(2016,2019);
		let month = IntegerUtils.generateNumber(0,11);
		let day = IntegerUtils.generateNumber(1,31);
		let hour = IntegerUtils.generateNumber(9,17);
		let minute = IntegerUtils.generateNumber(0,59);
		let second = IntegerUtils.generateNumber(0,59);
		
		return new Date(year, month, day, hour, minute, second);
	}	
	
	setTitle(title) {
		this.title = title;
	}
	
	setContent(content) {
		this.content = content;
	}
	
	setLoveIts(loveIts) {
		this.loveIts = loveIts;
	}
	
	setCreatedAt(createdAt) {
		this.createdAt = createdAt;
	}
}