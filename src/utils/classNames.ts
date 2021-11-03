export const classNames = (props:object, exception:any[]) => {
  const commonHandlers = ['onChange', 'onClick', 'onBlur']
  const commonExceptions = ['tabIndex', 'opacity', 'data', 'width', 'height']
  let classList:any = []
  Object.entries(props).map((entry) => {
    console.log(entry[1])
    if (entry[1] !== undefined && entry[1] !== '' && entry[1] !== false){
      [...exception, ...commonExceptions, ...commonHandlers].filter(exc => exc == entry[0]).length === 0
        ? classList.push(entry[0]) 
        : null
    }
  })
  return classList.join(' ')
}