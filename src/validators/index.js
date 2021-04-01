export default function() {
  const min = ({ length, min }, ...args) => { 
    typeof(args)

    return { 
      condition: length > 0 && length < min, 
      message: `cannot be shorter than ${ min } characters!` 
    }
  }
  const max = ({ length, max }, ...args) => {
    typeof(args)
    
    return { 
      condition: length > 0 && length > max, 
      message: `cannot be longer than ${ max } characters!` 
    }
  }
  const length = ({ length, target }, ...args) => {
    typeof(args)

    return {
      condition: length > 0 && length !== target,
      message: `must have a length of ${ target }! (${ length } currently)`
    }
  }
  const integer = ({ value }, ...args) => {
    typeof(args)

    return {
      condition: value && !(!isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10))),
      message: 'must consist of numbers only!'
    }
  }
  const email = ({ value }, ...args) => {
    typeof(args)

    return {
      condition: value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'is invalid!'
    }
  }
  const removeWhitespaces = ({ value }, ...args) => {
    typeof(args)
    
    return {
      condition: value && /\s/.test(value),
      message: 'cannot contain whitespaces!'
    }
  }
  const compare = ({ value, compareTo, compareMessage }, ...args) => {
    typeof(args)

    return {
      condition: value != compareTo,
      message: compareMessage
    }
  }

  const validate = (props, placeholderValue, content) => {
    let error = {}

    props.validators.forEach((validator) => {
      const validatorObject = validator({ value: content, length: content.length, min: props.min, max: props.max, target: props.length, compareTo: props.compareTo, compareMessage: props.compareMessage})

      if (validatorObject.condition) {
        error = {
          active: true,
          message: props.compareMessage ? props.compareMessage : placeholderValue.split('.').join('') + ' ' + validatorObject.message
        }
      }
    })

    return error
  }

  return {
    min,
    max,
    length,
    integer,
    email,
    removeWhitespaces,
    compare,
    validate
  }
}