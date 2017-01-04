import React from 'react'
import Icon from 'components/Icon'

export const NodeIcon = ({ className, ...rest }) => {
  return (
    <Icon
      {...rest}
      className={className}>
      <path d="M28.169 7.583l-11.036-6.401c-0.695-0.396-1.606-0.396-2.307 0l-11.122 6.401c-0.717 0.413-1.205 1.189-1.205 2.018v12.786c0 0.83 0.498 1.606 1.216 2.021l2.932 1.672c1.407 0.693 1.796 0.693 2.437 0.693 2.083 0 3.165-1.26 3.165-3.457v-12.623c0-0.178 0.111-0.444-0.064-0.444h-1.405c-0.178 0-0.53 0.265-0.53 0.443v12.622c0 0.974-0.904 1.943-2.55 1.12l-3.030-1.753c-0.106-0.058-0.169-0.173-0.169-0.295v-12.786c0-0.12 0.116-0.242 0.223-0.303l11.095-6.39c0.104-0.059 0.251-0.059 0.354 0l10.991 6.389c0.105 0.063 0.088 0.181 0.088 0.305v12.786c0 0.122 0.023 0.241-0.081 0.299l-11.033 6.394c-0.095 0.057-0.217 0.057-0.321 0l-2.829-1.687c-0.085-0.049-0.188-0.067-0.27-0.021-0.786 0.446-0.932 0.505-1.67 0.761-0.182 0.063-0.45 0.173 0.102 0.482l3.7 2.189c0.354 0.205 0.757 0.311 1.162 0.311 0.41 0 0.812-0.107 1.166-0.311l10.994-6.395c0.718-0.418 1.081-1.191 1.081-2.021v-12.786c-0-0.83-0.363-1.604-1.081-2.018zM19.432 20.361c-2.932 0-3.577-0.809-3.793-2.267-0.025-0.157-0.159-0.345-0.319-0.345h-1.433c-0.177 0-0.32 0.215-0.32 0.392 0 1.866 1.015 4.128 5.864 4.128 3.509 0 5.522-1.364 5.522-3.777 0-2.393-1.617-3.021-5.020-3.471-3.441-0.455-3.79-0.684-3.79-1.491 0-0.665 0.296-1.551 2.843-1.551 2.276 0 3.115 0.489 3.46 2.023 0.030 0.144 0.162 0.248 0.31 0.248h1.439c0.088 0 0.173-0.036 0.235-0.099 0.060-0.068 0.092-0.153 0.084-0.245-0.223-2.642-1.978-3.873-5.528-3.873-3.158 0-5.041 1.333-5.041 3.569 0 2.424 1.874 3.095 4.905 3.394 3.626 0.355 3.908 0.886 3.908 1.599 0 1.239-0.994 1.767-3.327 1.767z"></path>
    </Icon>
  )
}

export default NodeIcon