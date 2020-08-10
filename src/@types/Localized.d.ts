declare interface Localized<T> {
	en: T;
	sr: T;
	[key:string]: T;
}
