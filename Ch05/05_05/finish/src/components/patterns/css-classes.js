export const CSS = (args) => {
	let obj = {
		o1: 'meh',
		o2: 'yadda',
		o3: 'guachaf',
		o4: 'OIJOIJ'
	}

	let arr = args.split(' ')
	let newProps = arr.map((element, index) => {
		arr.push(obj[element])
		return obj[element]
	})

	return newProps.join(' ')
}
