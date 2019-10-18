export class IntegerUtils {
	
	/**
		Génère un entier aléatoirement dans la borne [min;max]
	*/
	static generateNumber(min, max) {
		let ecart = Math.abs(max - min);
		return min + Math.floor(Math.random() * Math.floor(ecart+1));
	}
}