# get-value-safely
JavaScript get nested values safely.


Assures that a value of a child chain property is returned without runtime errors.

If the checked property does not exist in the provided object or one of the children in the chain
is undefined, then it returns the provided fallback value.

The fallback can be also returned if the checked property is falsy (i.e. undefined, null, false, 0, '', etc.)
and the fallbackOnFalsy flag is set to <TRUE>.

Arrays could be checked as well by passing the index in the path; ex: getValue(arr, '0.obj')

Note: if object or path params are not provided, the fallback is returned.