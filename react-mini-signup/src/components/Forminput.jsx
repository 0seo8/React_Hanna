import React, { useState } from 'react'
import { ID_REGEX, PW_REGEX, ERROR_MSG } from '../constants/regex'

function Forminput({ id, label, inputProps }) {
  const { userInput, setUserInput } = useState(null)
  const checkValidation = (e) => {
    const { value, name } = e.id
    if (value.length !== 0) return 'required'

    switch (name) {
      case 'id':
        return !ID_REGEX.test(value) && setUserInput(ERROR_MSG.inValidId)
      case 'pw':
        return !PW_REGEX.test(value) && setUserInput(ERROR_MSG.inValidPw)
      case 'pw-check':
        return $pw.value !== value && setUserInput(ERROR_MSG.inValidPwCheck)
    }
  }
  return (
    <>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={id}
        >
          {label}
        </label>
        <input
          id={id}
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          {...inputProps}
          onChange={checkValidation}
        />
        <div className="mt-1 mb-3 text-xs text-red-500">{userInput}</div>
      </div>
    </>
  )
}

export default Forminput
