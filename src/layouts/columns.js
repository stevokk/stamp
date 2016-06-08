import Layout from '../core/layout'

class OneColumn extends Layout {
	constructor() {
		super('One Column')
	}
}

class TwoColumn extends Layout {
	constructor() {
		super('Two Columns')
	}
}
class ThreeColumn extends Layout {
	constructor() {
		super('Three Columns')
	}
}
class FourColumn extends Layout {
	constructor() {
		super('Four Columns')
	}
}

export { OneColumn, TwoColumn, ThreeColumn, FourColumn }