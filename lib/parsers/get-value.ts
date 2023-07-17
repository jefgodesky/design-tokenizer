const getValue = (dict: { [key: string]: any }, key: string): any => dict[key]?.$value

export default getValue
