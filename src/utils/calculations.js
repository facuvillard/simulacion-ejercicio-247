const { Decimal } = require('decimal.js');
Decimal.set({ precision: 8 });

const calculateK1 = (c, k, Q, F, V) => {
	const term1 = Decimal.mul(k, Decimal.pow(c, 2));
	const term2 = Decimal.div(Decimal.mul(Q, c), 2);
	const term3 = Decimal.div(F, V);
	const result = Decimal.sum(-term1, -term2, term3);
	return result;
};

const calculateK2 = (c, k, Q, F, V, h, K1) => {
	const c2 = Decimal.sum(c, Decimal.mul(Decimal.div(h, 2), K1));
	const term1 = Decimal.mul(k, Decimal.pow(c2, 2));
	const term2 = Decimal.div(Decimal.mul(Q, c2), 2);
	const term3 = Decimal.div(F, V);
	const result = Decimal.sum(-term1, -term2, term3);
	return result;
};

const calculateK3 = (c, k, Q, F, V, h, K2) => {
	const c3 = Decimal.sum(c, Decimal.mul(Decimal.div(h, 2), K2));
	const term1 = Decimal.mul(k, Decimal.pow(c3, 2));
	const term2 = Decimal.div(Decimal.mul(Q, c3), 2);
	const term3 = Decimal.div(F, V);
	const result = Decimal.sum(-term1, -term2, term3);
	return result;
};

const calculateK4 = (c, k, Q, F, V, h, K3) => {
	const c4 = Decimal.sum(c, Decimal.mul(h, K3));
	const term1 = Decimal.mul(k, Decimal.pow(c4, 2));
	const term2 = Decimal.div(Decimal.mul(Q, c4), 2);
	const term3 = Decimal.div(F, V);
	const result = Decimal.sum(-term1, -term2, term3);
	return result;
};

const calculateNextConcentration = (c, h, K1, K2, K3, K4) => {
	const result = Decimal.sum(c, Decimal.mul(Decimal.div(h, 6), Decimal.sum(K1, K2, K3, K4)));
	return new Decimal(result);
};

const calculateNextT = (h, t) => {
	const result = Decimal.sum(t, h);
	return new Decimal(result);
};

module.exports = {
	calculateK1,
	calculateK2,
	calculateK3,
	calculateK4,
	calculateNextConcentration,
	calculateNextT,
};
