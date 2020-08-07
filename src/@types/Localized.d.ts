declare interface Localized<T> {
	en: T;
	rs: T;
	[key:string]: T;
}
