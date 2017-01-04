import React from 'react'
import Icon from 'components/Icon'

export const ReduxIcon = ({ className, ...rest }) => {
  return (
    <Icon
      {...rest}
      className={className}
      viewBox={'0 0 35 32'}>
      <path d="M17.536 0.006c-0.001 0.001-0.071 0.005-0.156 0.008-0.084 0.004-0.171 0.009-0.19 0.010-0.020 0.002-0.077 0.007-0.129 0.011-0.050 0.003-0.1 0.008-0.108 0.010s-0.047 0.006-0.085 0.010c-0.038 0.003-0.079 0.008-0.092 0.010-0.011 0.003-0.047 0.007-0.079 0.011-0.032 0.003-0.065 0.008-0.075 0.009-0.009 0.002-0.039 0.006-0.067 0.010-0.041 0.006-0.153 0.025-0.296 0.051-0.016 0.003-0.047 0.008-0.067 0.011s-0.039 0.008-0.042 0.010c-0.003 0.002-0.022 0.006-0.041 0.009s-0.056 0.011-0.081 0.016c-0.026 0.006-0.056 0.012-0.067 0.015-0.011 0.002-0.060 0.013-0.108 0.026-0.048 0.011-0.095 0.023-0.103 0.025s-0.075 0.021-0.149 0.041c-1.093 0.302-2.151 0.836-3.098 1.565-0.181 0.139-0.438 0.353-0.547 0.453-0.006 0.005-0.050 0.045-0.098 0.087s-0.181 0.172-0.297 0.288c-0.191 0.191-0.254 0.256-0.401 0.418-0.043 0.047-0.198 0.225-0.244 0.282-0.012 0.014-0.039 0.046-0.061 0.072-0.023 0.026-0.054 0.065-0.071 0.086-0.016 0.023-0.049 0.064-0.073 0.093-0.293 0.367-0.71 0.99-0.908 1.355-0.013 0.026-0.028 0.050-0.033 0.057-0.014 0.020-0.174 0.321-0.251 0.477-0.108 0.216-0.199 0.412-0.284 0.614-0.024 0.057-0.049 0.116-0.057 0.134-0.135 0.308-0.419 1.133-0.566 1.647-0.079 0.274-0.201 0.742-0.216 0.828-0.003 0.020-0.008 0.039-0.010 0.042-0.003 0.004-0.007 0.026-0.010 0.047-0.004 0.023-0.010 0.054-0.015 0.071-0.005 0.016-0.011 0.044-0.014 0.062-0.003 0.016-0.010 0.049-0.015 0.072s-0.012 0.053-0.015 0.067c-0.002 0.014-0.010 0.051-0.016 0.082s-0.013 0.068-0.015 0.082c-0.003 0.014-0.007 0.037-0.010 0.051s-0.007 0.038-0.010 0.054c-0.002 0.015-0.006 0.036-0.009 0.046s-0.008 0.039-0.011 0.065c-0.003 0.026-0.008 0.054-0.011 0.063-0.003 0.010-0.007 0.031-0.009 0.046-0.002 0.016-0.009 0.058-0.015 0.092s-0.013 0.078-0.016 0.098c-0.003 0.020-0.014 0.092-0.025 0.16-0.020 0.125-0.024 0.154-0.036 0.247-0.004 0.028-0.009 0.063-0.011 0.077s-0.007 0.049-0.009 0.078c-0.003 0.029-0.007 0.062-0.009 0.072-0.002 0.011-0.007 0.051-0.011 0.092s-0.009 0.085-0.011 0.103c-0.015 0.129-0.029 0.272-0.040 0.407-0.003 0.042-0.008 0.096-0.010 0.118s-0.007 0.097-0.011 0.165c-0.004 0.068-0.008 0.142-0.009 0.165-0.022 0.331-0.029 1.329-0.011 1.637 0.004 0.079 0.009 0.174 0.011 0.211 0.004 0.083 0.016 0.26 0.021 0.309 0.002 0.020 0.006 0.084 0.010 0.144s0.008 0.115 0.010 0.123c0.002 0.008 0.007 0.053 0.010 0.098 0.004 0.045 0.008 0.094 0.010 0.108s0.007 0.054 0.010 0.088c0.003 0.034 0.008 0.078 0.010 0.098 0.003 0.020 0.009 0.077 0.015 0.129 0.013 0.105 0.019 0.151 0.026 0.196 0.003 0.016 0.007 0.051 0.010 0.077s0.007 0.058 0.010 0.072c0.002 0.014 0.007 0.046 0.010 0.072 0.006 0.043 0.042 0.272 0.053 0.329 0.002 0.014 0.007 0.042 0.010 0.062s0.012 0.075 0.022 0.123c0.009 0.048 0.018 0.097 0.020 0.108 0.009 0.067 0.063 0.328 0.113 0.558 0.077 0.347 0.079 0.357 0.117 0.506 0.018 0.070 0.034 0.135 0.036 0.144 0.001 0.009 0.009 0.037 0.016 0.063s0.013 0.051 0.015 0.058c0.003 0.017 0.076 0.281 0.088 0.318 0.005 0.016 0.042 0.14 0.081 0.275 0.163 0.55 0.406 1.238 0.602 1.712 0.007 0.016 0.035 0.084 0.062 0.149 0.026 0.065 0.085 0.204 0.131 0.309 0.085 0.195 0.106 0.243 0.173 0.386 0.021 0.045 0.056 0.121 0.078 0.17 0.127 0.275 0.47 0.949 0.637 1.245 0.027 0.048 0.063 0.113 0.079 0.144 0.029 0.051 0.108 0.19 0.139 0.242 0.029 0.048 0.036 0.072 0.025 0.087-0.051 0.074-0.19 0.394-0.223 0.512-0.008 0.030-0.022 0.080-0.030 0.111-0.076 0.283-0.093 0.667-0.039 0.973 0.008 0.048 0.016 0.097 0.019 0.108 0.012 0.079 0.081 0.304 0.118 0.391 0.008 0.016 0.014 0.033 0.015 0.036 0.008 0.024 0.033 0.078 0.069 0.148 0.266 0.529 0.717 0.944 1.259 1.159 0.078 0.031 0.255 0.089 0.294 0.097 0.013 0.002 0.069 0.013 0.122 0.025 0.323 0.069 0.676 0.063 1.019-0.014 0.074-0.017 0.231-0.062 0.262-0.075 0.011-0.005 0.041-0.016 0.067-0.027 0.086-0.033 0.283-0.131 0.371-0.183 0.598-0.361 1.035-1.016 1.128-1.69 0.003-0.029 0.008-0.060 0.010-0.070 0.022-0.12 0.021-0.499-0.002-0.606-0.002-0.013-0.007-0.042-0.010-0.065s-0.009-0.062-0.015-0.087c-0.005-0.026-0.011-0.057-0.014-0.070-0.009-0.054-0.049-0.188-0.084-0.285-0.133-0.374-0.367-0.715-0.677-0.988-0.074-0.066-0.119-0.101-0.232-0.181-0.055-0.039-0.181-0.113-0.273-0.161-0.077-0.039-0.307-0.133-0.35-0.142-0.005-0.002-0.042-0.012-0.082-0.024-0.085-0.026-0.251-0.059-0.345-0.069-0.037-0.004-0.080-0.009-0.098-0.011-0.044-0.006-0.385-0.006-0.394-0.001-0.006 0.004-0.104 0.015-0.176 0.021-0.022 0.002-0.039-0.024-0.152-0.219-0.070-0.121-0.131-0.229-0.135-0.237-0.007-0.020-0.164-0.309-0.177-0.329-0.006-0.008-0.013-0.023-0.016-0.031s-0.010-0.025-0.018-0.036c-0.006-0.011-0.059-0.115-0.116-0.232-0.471-0.946-0.814-1.832-1.104-2.861-0.068-0.24-0.219-0.865-0.244-1.002-0.003-0.018-0.014-0.076-0.025-0.13-0.011-0.054-0.025-0.126-0.031-0.16s-0.013-0.071-0.015-0.082c-0.008-0.041-0.086-0.516-0.092-0.561-0.003-0.026-0.008-0.057-0.010-0.069-0.003-0.012-0.007-0.047-0.011-0.077-0.003-0.030-0.008-0.066-0.010-0.080-0.005-0.039-0.014-0.118-0.021-0.173-0.003-0.027-0.007-0.063-0.010-0.079-0.002-0.018-0.006-0.061-0.010-0.098-0.003-0.037-0.008-0.078-0.010-0.093s-0.007-0.065-0.010-0.113c-0.004-0.048-0.008-0.099-0.010-0.113-0.006-0.044-0.020-0.216-0.032-0.407-0.003-0.057-0.007-0.129-0.009-0.16-0.027-0.431-0.027-1.515 0-1.842 0.002-0.026 0.006-0.104 0.010-0.175 0.003-0.071 0.008-0.154 0.011-0.185s0.007-0.082 0.009-0.113c0.015-0.2 0.019-0.234 0.022-0.25 0.002-0.010 0.006-0.055 0.010-0.098 0.003-0.043 0.008-0.088 0.009-0.097 0.002-0.009 0.006-0.046 0.010-0.082 0.003-0.036 0.008-0.076 0.010-0.091 0.004-0.026 0.011-0.075 0.020-0.149 0.003-0.023 0.008-0.058 0.010-0.077 0.037-0.243 0.049-0.322 0.058-0.365 0.005-0.029 0.012-0.066 0.015-0.082 0.003-0.018 0.007-0.041 0.009-0.053s0.007-0.038 0.010-0.057c0.003-0.020 0.010-0.061 0.016-0.092 0.007-0.031 0.014-0.071 0.018-0.088 0.002-0.018 0.011-0.064 0.021-0.103 0.008-0.040 0.016-0.081 0.020-0.093 0.002-0.011 0.006-0.030 0.009-0.041 0.014-0.064 0.048-0.209 0.053-0.23 0.026-0.128 0.168-0.632 0.245-0.872 0.118-0.37 0.295-0.839 0.402-1.070 0.008-0.018 0.033-0.073 0.055-0.123 0.174-0.4 0.436-0.89 0.726-1.358 0.147-0.238 0.411-0.614 0.604-0.865 0.065-0.083 0.126-0.163 0.134-0.175 0.008-0.011 0.025-0.032 0.036-0.043 0.011-0.012 0.037-0.042 0.057-0.067 0.062-0.076 0.123-0.143 0.262-0.283 0.18-0.181 0.264-0.254 0.526-0.466 0.099-0.079 0.405-0.29 0.555-0.382 0.396-0.243 0.857-0.468 1.292-0.633 0.071-0.027 0.156-0.060 0.19-0.072 0.054-0.021 0.448-0.147 0.504-0.163 0.011-0.003 0.072-0.020 0.134-0.037 0.216-0.060 0.569-0.142 0.69-0.16 0.011-0.002 0.048-0.008 0.082-0.015 0.034-0.006 0.080-0.013 0.103-0.016s0.065-0.010 0.093-0.015c0.056-0.010 0.093-0.014 0.237-0.032 0.14-0.015 0.269-0.028 0.386-0.036 0.079-0.006 0.506-0.006 0.571 0 0.034 0.003 0.101 0.008 0.149 0.011s0.099 0.008 0.113 0.010c0.014 0.003 0.049 0.007 0.077 0.010 0.029 0.004 0.077 0.010 0.108 0.015s0.077 0.012 0.103 0.015c0.069 0.009 0.272 0.054 0.409 0.087 0.655 0.167 1.308 0.495 1.897 0.953 0.277 0.216 0.655 0.577 0.913 0.875 0.184 0.212 0.472 0.587 0.59 0.766 0.005 0.008 0.033 0.049 0.062 0.091 0.028 0.042 0.051 0.077 0.051 0.078 0 0.002 0.023 0.037 0.050 0.079 0.052 0.080 0.227 0.368 0.227 0.375 0 0.002 0.013 0.027 0.030 0.055 0.031 0.054 0.060 0.105 0.135 0.244 0.049 0.091 0.268 0.526 0.268 0.533 0 0.003 0.019 0.044 0.040 0.092 0.082 0.174 0.331 0.778 0.346 0.837 0.001 0.005 0.005 0.018 0.008 0.026 0.068 0.166 0.288 0.869 0.342 1.091 0.002 0.008 0.019 0.073 0.036 0.144 0.036 0.144 0.035 0.136 0.092 0.407 0.022 0.107 0.043 0.216 0.047 0.242 0.003 0.026 0.008 0.054 0.010 0.062s0.007 0.036 0.010 0.062c0.003 0.026 0.008 0.054 0.010 0.062s0.007 0.036 0.010 0.062c0.007 0.063 0.016 0.122 0.023 0.16 0.002 0.016 0.006 0.051 0.008 0.077s0.006 0.060 0.009 0.077c0.002 0.016 0.008 0.075 0.011 0.129 0.004 0.054 0.009 0.1 0.012 0.103 0.002 0.003 0.092 0.027 0.197 0.055 0.106 0.027 0.2 0.050 0.208 0.053 0.243 0.063 0.887 0.26 1.359 0.418 0.201 0.067 0.374 0.125 0.383 0.129 0.013 0.005 0.016 0.002 0.014-0.012-0.002-0.010-0.007-0.058-0.011-0.106s-0.008-0.106-0.010-0.129c-0.001-0.023-0.006-0.078-0.010-0.123s-0.008-0.094-0.010-0.108c-0.002-0.014-0.006-0.054-0.010-0.088s-0.008-0.080-0.010-0.103-0.007-0.067-0.010-0.098c-0.003-0.031-0.008-0.071-0.010-0.088-0.003-0.018-0.007-0.051-0.010-0.077s-0.008-0.061-0.010-0.077c-0.003-0.018-0.007-0.055-0.010-0.082-0.004-0.029-0.008-0.063-0.010-0.077-0.003-0.014-0.007-0.046-0.011-0.072s-0.007-0.054-0.009-0.062-0.007-0.039-0.010-0.067c-0.003-0.029-0.008-0.061-0.010-0.073-0.003-0.012-0.007-0.040-0.010-0.062s-0.008-0.051-0.011-0.066c-0.003-0.013-0.007-0.041-0.010-0.062-0.002-0.020-0.011-0.071-0.020-0.113s-0.027-0.138-0.040-0.211c-0.014-0.074-0.029-0.145-0.031-0.16-0.003-0.014-0.014-0.070-0.027-0.123-0.011-0.054-0.023-0.107-0.025-0.118-0.019-0.095-0.105-0.447-0.175-0.705-0.026-0.097-0.109-0.381-0.142-0.484-0.082-0.258-0.136-0.414-0.245-0.71-0.072-0.195-0.211-0.529-0.33-0.793-0.046-0.105-0.284-0.579-0.35-0.7-0.253-0.468-0.542-0.919-0.861-1.343-0.155-0.206-0.213-0.277-0.422-0.522-0.103-0.12-0.131-0.152-0.259-0.289-0.183-0.197-0.519-0.52-0.69-0.664-0.014-0.011-0.037-0.032-0.051-0.044-0.078-0.068-0.249-0.205-0.376-0.302-0.079-0.060-0.148-0.113-0.154-0.117-0.005-0.004-0.033-0.024-0.062-0.043-0.028-0.019-0.054-0.037-0.057-0.041-0.013-0.016-0.449-0.298-0.551-0.356-0.023-0.012-0.095-0.054-0.16-0.092-0.264-0.151-0.705-0.359-1.019-0.482-0.348-0.136-0.78-0.267-1.123-0.341-0.052-0.011-0.417-0.079-0.447-0.083-0.016-0.002-0.044-0.006-0.062-0.009-0.016-0.002-0.054-0.007-0.082-0.011-0.028-0.003-0.063-0.008-0.077-0.010-0.024-0.003-0.058-0.007-0.19-0.021-0.023-0.003-0.076-0.007-0.118-0.010s-0.114-0.008-0.16-0.011c-0.074-0.005-0.64-0.013-0.646-0.008zM15.501 9.923c-0.122 0.015-0.149 0.019-0.171 0.024-0.012 0.002-0.039 0.007-0.061 0.010-0.096 0.015-0.327 0.082-0.412 0.119-0.011 0.005-0.060 0.026-0.108 0.047-0.638 0.28-1.136 0.856-1.329 1.538-0.016 0.060-0.033 0.125-0.036 0.144s-0.008 0.039-0.009 0.042c-0.002 0.003-0.007 0.029-0.010 0.057-0.004 0.028-0.008 0.058-0.011 0.066-0.026 0.093-0.026 0.548 0 0.685 0.002 0.011 0.007 0.040 0.011 0.066 0.055 0.332 0.187 0.659 0.387 0.952 0.039 0.057 0.081 0.115 0.094 0.131 0.013 0.014 0.040 0.046 0.060 0.071 0.122 0.149 0.407 0.395 0.552 0.477 0.016 0.009 0.044 0.026 0.061 0.036 0.23 0.138 0.579 0.265 0.813 0.295 0.029 0.003 0.055 0.008 0.058 0.010 0.016 0.009 0.186 0.020 0.339 0.020 0.194 0 0.308-0.009 0.448-0.037 0.029-0.005 0.061-0.011 0.072-0.013 0.189-0.037 0.422-0.127 0.672-0.257 0.036-0.020 0.261-0.169 0.27-0.18 0.003-0.003 0.029-0.025 0.057-0.047 0.161-0.128 0.311-0.288 0.438-0.468 0.093-0.131 0.139-0.208 0.207-0.347 0.041-0.084 0.057-0.106 0.074-0.107 0.011 0 0.049-0.002 0.083-0.004 0.345-0.016 0.491-0.021 0.865-0.021 0.369 0 0.597 0.006 0.808 0.021 0.026 0.002 0.093 0.006 0.149 0.009 0.057 0.004 0.131 0.009 0.165 0.011 0.034 0.003 0.087 0.007 0.118 0.010 0.106 0.008 0.19 0.016 0.226 0.021 0.020 0.002 0.066 0.007 0.103 0.010s0.078 0.008 0.093 0.010c0.014 0.002 0.054 0.007 0.087 0.010s0.073 0.008 0.087 0.010c0.014 0.002 0.056 0.007 0.093 0.011s0.069 0.008 0.072 0.009c0.003 0.001 0.033 0.005 0.067 0.009 0.099 0.012 0.131 0.016 0.19 0.027 0.031 0.005 0.077 0.012 0.103 0.015s0.054 0.008 0.062 0.010c0.008 0.002 0.036 0.007 0.062 0.010 0.073 0.010 0.208 0.034 0.381 0.067 0.087 0.016 0.171 0.032 0.185 0.035 0.108 0.021 0.473 0.101 0.571 0.126 0.064 0.018 0.086 0.023 0.128 0.031 0.026 0.005 0.069 0.016 0.336 0.089 0.796 0.213 1.675 0.529 2.419 0.871 0.074 0.033 0.157 0.071 0.185 0.084 0.085 0.038 0.579 0.284 0.679 0.338 0.051 0.027 0.144 0.076 0.206 0.11 0.063 0.033 0.136 0.073 0.163 0.090s0.051 0.029 0.054 0.029c0.003 0 0.035 0.019 0.072 0.041s0.069 0.041 0.072 0.041c0.005 0 0.438 0.26 0.546 0.327 0.045 0.029 0.11 0.070 0.144 0.091 0.252 0.157 0.866 0.582 0.993 0.687 0.008 0.007 0.058 0.045 0.108 0.084 0.095 0.072 0.268 0.209 0.314 0.248 0.036 0.031 0.388 0.333 0.421 0.362 0.192 0.171 0.669 0.641 0.84 0.83 0.051 0.056 0.098 0.107 0.103 0.113 0.008 0.009 0.116 0.134 0.229 0.264 0.024 0.028 0.107 0.13 0.199 0.243 0.031 0.039 0.115 0.149 0.187 0.246 0.072 0.096 0.135 0.18 0.14 0.185 0.005 0.006 0.017 0.025 0.029 0.041 0.010 0.017 0.022 0.033 0.025 0.036 0.035 0.033 0.365 0.543 0.496 0.767 0.291 0.496 0.538 0.999 0.74 1.508 0.040 0.099 0.076 0.189 0.081 0.201 0.024 0.051 0.147 0.425 0.185 0.561 0.025 0.084 0.062 0.222 0.067 0.247 0.002 0.008 0.015 0.064 0.030 0.123s0.029 0.123 0.032 0.143c0.003 0.020 0.008 0.038 0.010 0.041 0.002 0.004 0.006 0.027 0.010 0.052s0.008 0.048 0.010 0.051c0.002 0.003 0.006 0.025 0.009 0.047 0.004 0.023 0.008 0.050 0.010 0.061 0.002 0.011 0.007 0.043 0.010 0.070 0.004 0.028 0.009 0.061 0.012 0.072 0.003 0.019 0.012 0.081 0.030 0.218 0.002 0.020 0.015 0.148 0.022 0.221 0.023 0.251 0.022 0.793-0.001 0.973-0.002 0.016-0.007 0.063-0.010 0.103-0.003 0.039-0.008 0.079-0.010 0.087s-0.007 0.041-0.010 0.072c-0.003 0.031-0.010 0.079-0.015 0.108-0.005 0.028-0.011 0.068-0.014 0.087s-0.010 0.062-0.016 0.093c-0.006 0.031-0.013 0.066-0.014 0.077-0.025 0.157-0.142 0.561-0.235 0.808-0.041 0.108-0.049 0.129-0.090 0.218-0.011 0.027-0.022 0.052-0.022 0.056 0 0.014-0.171 0.355-0.239 0.478-0.070 0.126-0.211 0.365-0.226 0.386-0.004 0.005-0.050 0.075-0.103 0.154-0.051 0.079-0.107 0.161-0.121 0.18-0.015 0.020-0.064 0.084-0.108 0.144-0.069 0.093-0.245 0.314-0.262 0.329-0.003 0.003-0.040 0.044-0.082 0.093-0.144 0.165-0.429 0.444-0.613 0.598-0.561 0.474-1.229 0.852-1.924 1.090-0.105 0.036-0.349 0.111-0.381 0.118-0.005 0.001-0.031 0.007-0.057 0.014s-0.054 0.014-0.062 0.016c-0.039 0.008-0.163 0.038-0.19 0.046-0.031 0.008-0.117 0.027-0.176 0.037-0.016 0.002-0.041 0.007-0.056 0.009-0.043 0.009-0.068 0.013-0.104 0.020-0.020 0.003-0.046 0.008-0.060 0.011-0.014 0.002-0.063 0.009-0.108 0.015-0.046 0.006-0.095 0.013-0.109 0.015-0.039 0.006-0.102 0.013-0.165 0.021-0.031 0.003-0.073 0.008-0.093 0.010-0.416 0.050-1.202 0.050-1.657 0-0.020-0.002-0.073-0.007-0.118-0.010-0.045-0.004-0.090-0.009-0.098-0.010-0.009-0.002-0.044-0.006-0.077-0.010-0.172-0.021-0.215-0.026-0.239-0.031-0.012-0.003-0.042-0.007-0.067-0.010s-0.070-0.010-0.101-0.015c-0.031-0.005-0.075-0.012-0.098-0.015-0.023-0.004-0.048-0.008-0.057-0.010s-0.032-0.007-0.051-0.010c-0.020-0.003-0.082-0.015-0.139-0.027s-0.114-0.023-0.129-0.026c-0.014-0.002-0.046-0.009-0.072-0.014-0.026-0.006-0.056-0.012-0.067-0.014-0.096-0.020-0.458-0.11-0.602-0.151-0.060-0.017-0.115-0.033-0.123-0.035-0.026-0.006-0.319-0.098-0.413-0.129-0.265-0.090-0.594-0.215-0.795-0.305-0.101-0.044-0.102-0.045-0.127-0.026-0.020 0.015-0.14 0.121-0.194 0.171-0.059 0.054-0.384 0.325-0.495 0.412-0.022 0.016-0.044 0.036-0.050 0.041-0.014 0.013-0.284 0.227-0.33 0.262-0.019 0.014-0.163 0.126-0.32 0.248-0.159 0.121-0.336 0.258-0.395 0.303s-0.112 0.084-0.117 0.089c-0.005 0.004 0.028 0.025 0.072 0.045 0.658 0.306 1.33 0.561 1.991 0.758 0.192 0.058 0.563 0.159 0.658 0.179 0.009 0.002 0.059 0.013 0.109 0.026 0.168 0.038 0.439 0.096 0.518 0.109 0.028 0.005 0.185 0.034 0.223 0.041 0.010 0.002 0.038 0.006 0.062 0.009 0.062 0.009 0.1 0.015 0.129 0.021 0.040 0.007 0.084 0.014 0.129 0.020 0.023 0.003 0.093 0.012 0.154 0.021 0.063 0.008 0.143 0.019 0.18 0.023 0.037 0.003 0.074 0.007 0.083 0.009 0.008 0.002 0.052 0.006 0.098 0.010 0.044 0.004 0.098 0.008 0.117 0.010 0.032 0.003 0.115 0.009 0.268 0.021 0.36 0.027 1.155 0.027 1.472 0 0.020-0.001 0.078-0.006 0.129-0.009 0.095-0.007 0.175-0.015 0.221-0.022 0.014-0.002 0.059-0.006 0.098-0.010 0.081-0.007 0.123-0.012 0.226-0.026 0.040-0.005 0.093-0.012 0.118-0.015s0.054-0.008 0.062-0.010c0.008-0.002 0.036-0.007 0.062-0.010s0.058-0.007 0.072-0.010 0.040-0.007 0.059-0.010c0.044-0.005 0.137-0.023 0.255-0.046 0.029-0.005 0.067-0.012 0.086-0.015 0.047-0.008 0.398-0.090 0.547-0.128 0.175-0.044 0.556-0.156 0.602-0.177 0.011-0.004 0.056-0.020 0.098-0.033 0.19-0.062 0.613-0.225 0.78-0.302 0.042-0.020 0.077-0.035 0.079-0.035 0.022 0 0.589-0.283 0.762-0.381 0.708-0.397 1.345-0.865 1.882-1.379 0.097-0.093 0.33-0.327 0.362-0.364 0.026-0.030 0.177-0.199 0.195-0.217 0.073-0.079 0.351-0.431 0.43-0.546 0.184-0.266 0.324-0.489 0.432-0.69 0.073-0.135 0.197-0.39 0.24-0.495 0.021-0.050 0.044-0.106 0.051-0.122 0.081-0.184 0.279-0.815 0.307-0.98 0.003-0.015 0.015-0.073 0.028-0.127 0.043-0.19 0.083-0.419 0.108-0.617 0.003-0.024 0.007-0.057 0.009-0.072 0.003-0.014 0.008-0.062 0.011-0.104 0.004-0.042 0.009-0.084 0.010-0.093 0.003-0.014 0.012-0.12 0.021-0.232 0.026-0.329 0.026-0.942 0-1.256-0.001-0.023-0.006-0.083-0.010-0.134-0.003-0.051-0.008-0.103-0.010-0.115s-0.006-0.059-0.010-0.103c-0.004-0.044-0.008-0.092-0.011-0.106-0.002-0.014-0.006-0.046-0.010-0.072s-0.012-0.095-0.021-0.154c-0.009-0.060-0.017-0.125-0.021-0.144s-0.009-0.060-0.014-0.087c-0.005-0.029-0.012-0.068-0.015-0.087-0.062-0.385-0.233-1.047-0.384-1.492-0.061-0.176-0.2-0.547-0.239-0.633-0.005-0.011-0.024-0.056-0.041-0.098s-0.039-0.092-0.046-0.108c-0.007-0.017-0.033-0.073-0.056-0.126-0.109-0.248-0.34-0.698-0.51-0.989-0.284-0.49-0.666-1.048-1.004-1.465-0.048-0.061-0.098-0.121-0.109-0.136-0.059-0.073-0.353-0.416-0.493-0.573-0.352-0.396-0.951-0.995-1.293-1.293-0.026-0.022-0.048-0.042-0.051-0.045-0.008-0.008-0.155-0.137-0.195-0.171-0.020-0.016-0.055-0.046-0.077-0.066-0.356-0.312-0.986-0.785-1.488-1.119-0.139-0.093-0.257-0.172-0.265-0.178-0.007-0.005-0.015-0.010-0.020-0.010s-0.023-0.011-0.041-0.026c-0.019-0.014-0.036-0.026-0.039-0.026s-0.044-0.025-0.091-0.055c-0.18-0.116-0.596-0.357-0.909-0.527-0.102-0.056-0.673-0.343-0.772-0.388-0.045-0.022-0.123-0.058-0.175-0.081-0.116-0.054-0.509-0.225-0.516-0.225-0.002 0-0.024-0.009-0.048-0.020-0.264-0.121-1.124-0.431-1.587-0.572-0.133-0.041-0.504-0.148-0.53-0.154-0.008-0.002-0.075-0.020-0.149-0.039-0.073-0.020-0.164-0.043-0.201-0.053-0.037-0.008-0.134-0.032-0.216-0.053-0.081-0.020-0.16-0.038-0.172-0.041-0.013-0.002-0.032-0.006-0.042-0.009-0.009-0.003-0.029-0.007-0.043-0.010-0.014-0.002-0.056-0.011-0.093-0.020-0.069-0.018-0.534-0.111-0.643-0.131-0.034-0.005-0.073-0.012-0.087-0.015s-0.111-0.020-0.216-0.037c-0.209-0.034-0.227-0.037-0.273-0.044-0.033-0.005-0.242-0.035-0.309-0.043-0.080-0.010-0.113-0.015-0.139-0.020-0.014-0.002-0.054-0.007-0.087-0.011-0.034-0.003-0.075-0.008-0.093-0.010-0.016-0.002-0.059-0.006-0.093-0.009-0.034-0.004-0.069-0.008-0.077-0.010s-0.055-0.007-0.103-0.011c-0.048-0.003-0.096-0.008-0.105-0.009-0.017-0.004-0.093-0.011-0.204-0.021-0.031-0.002-0.082-0.006-0.113-0.009-0.072-0.007-0.254-0.021-0.417-0.031-0.077-0.005-0.227-0.013-0.391-0.022-0.369-0.019-1.176-0.025-1.505-0.011l-0.157 0.006-0.022-0.044c-0.012-0.024-0.056-0.095-0.097-0.156-0.235-0.354-0.539-0.629-0.904-0.817-0.249-0.129-0.543-0.221-0.81-0.253-0.088-0.010-0.44-0.013-0.515-0.004zM6.17 15.018c-0.005 0.005-0.047 0.037-0.093 0.071-0.045 0.033-0.086 0.065-0.093 0.069-0.005 0.005-0.045 0.034-0.088 0.065s-0.086 0.064-0.098 0.073c-0.011 0.009-0.115 0.093-0.232 0.185s-0.213 0.171-0.216 0.174c-0.003 0.003-0.051 0.044-0.108 0.093s-0.108 0.092-0.114 0.098c-0.006 0.005-0.043 0.038-0.082 0.072-0.038 0.034-0.094 0.083-0.122 0.11s-0.064 0.058-0.077 0.070c-0.289 0.25-0.919 0.905-1.197 1.246-0.015 0.020-0.063 0.076-0.105 0.128-0.041 0.050-0.106 0.132-0.144 0.18-0.037 0.048-0.074 0.095-0.080 0.103-0.007 0.008-0.057 0.075-0.11 0.149-0.054 0.073-0.101 0.138-0.106 0.144-0.040 0.051-0.23 0.334-0.373 0.556-0.264 0.41-0.638 1.138-0.808 1.577-0.018 0.044-0.036 0.090-0.041 0.101-0.006 0.011-0.023 0.052-0.037 0.093-0.014 0.039-0.038 0.102-0.052 0.139-0.045 0.12-0.165 0.486-0.208 0.636-0.071 0.246-0.178 0.692-0.212 0.882-0.003 0.016-0.007 0.044-0.010 0.062-0.028 0.157-0.036 0.206-0.046 0.273-0.006 0.042-0.013 0.094-0.016 0.113-0.002 0.020-0.006 0.049-0.008 0.067-0.012 0.083-0.027 0.203-0.033 0.268-0.004 0.039-0.008 0.085-0.009 0.103-0.004 0.035-0.016 0.196-0.021 0.257-0.024 0.323-0.024 1.011 0 1.24 0.002 0.020 0.006 0.075 0.009 0.123 0.004 0.048 0.008 0.101 0.010 0.118 0.002 0.016 0.007 0.066 0.011 0.108 0.003 0.042 0.008 0.089 0.010 0.103 0.003 0.014 0.007 0.046 0.010 0.072s0.007 0.063 0.010 0.082c0.002 0.020 0.007 0.057 0.010 0.082 0.011 0.084 0.078 0.467 0.093 0.533 0.008 0.035 0.018 0.079 0.021 0.098 0.003 0.017 0.018 0.081 0.032 0.141 0.032 0.129 0.034 0.138 0.040 0.165 0.002 0.012 0.014 0.057 0.026 0.101 0.012 0.043 0.025 0.089 0.027 0.1 0.029 0.142 0.238 0.747 0.354 1.024 0.13 0.308 0.295 0.639 0.463 0.921 0.374 0.627 0.841 1.169 1.467 1.7 0.049 0.042 0.166 0.133 0.371 0.289 0.152 0.117 0.583 0.394 0.793 0.513 0.615 0.345 1.235 0.605 1.966 0.826 0.096 0.029 0.364 0.101 0.406 0.109 0.010 0.002 0.039 0.008 0.064 0.015 0.025 0.006 0.062 0.015 0.081 0.021 0.069 0.017 0.284 0.063 0.417 0.087 0.074 0.014 0.148 0.029 0.165 0.032 0.034 0.006 0.038 0.007 0.216 0.035 0.111 0.017 0.162 0.025 0.34 0.046 0.029 0.003 0.061 0.008 0.072 0.010s0.054 0.007 0.093 0.010c0.040 0.003 0.115 0.010 0.169 0.016 0.053 0.005 0.141 0.012 0.196 0.015s0.117 0.007 0.14 0.009c0.23 0.024 1.137 0.024 1.395 0 0.020-0.001 0.080-0.006 0.134-0.009 0.054-0.004 0.118-0.009 0.144-0.011s0.079-0.007 0.118-0.011c0.040-0.003 0.083-0.007 0.098-0.009 0.014-0.001 0.056-0.006 0.093-0.009 0.037-0.004 0.078-0.009 0.093-0.011 0.036-0.005 0.133-0.017 0.17-0.022 0.018-0.002 0.064-0.008 0.103-0.014 0.040-0.005 0.089-0.012 0.108-0.015s0.047-0.007 0.062-0.010c0.014-0.003 0.042-0.007 0.062-0.009 0.030-0.003 0.303-0.052 0.401-0.073 0.014-0.002 0.040-0.007 0.057-0.010 0.018-0.003 0.049-0.010 0.072-0.015s0.111-0.024 0.196-0.041c0.085-0.019 0.236-0.051 0.335-0.074s0.187-0.042 0.197-0.044c0.037-0.007 0.406-0.102 0.56-0.144 0.49-0.134 0.823-0.239 1.456-0.459 0.031-0.010 0.066-0.024 0.077-0.029s0.074-0.029 0.139-0.052c0.17-0.062 0.449-0.173 0.633-0.252 0.434-0.186 0.64-0.282 0.984-0.453 0.261-0.131 0.42-0.213 0.622-0.324 0.034-0.019 0.080-0.044 0.103-0.057 0.355-0.195 0.86-0.509 1.347-0.841 0.178-0.121 0.669-0.487 0.85-0.633 0.232-0.186 0.488-0.4 0.601-0.502 0.006-0.006 0.050-0.045 0.099-0.087 0.339-0.299 0.79-0.742 1.132-1.112 0.060-0.065 0.115-0.125 0.123-0.134 0.008-0.008 0.066-0.074 0.128-0.144 0.062-0.071 0.127-0.144 0.143-0.164 0.058-0.065 0.198-0.232 0.259-0.31 0.034-0.042 0.072-0.087 0.085-0.101 0.012-0.013 0.023-0.027 0.023-0.031s0.010-0.019 0.024-0.033c0.013-0.014 0.048-0.059 0.079-0.098 0.031-0.040 0.061-0.078 0.066-0.084 0.047-0.056 0.237-0.309 0.397-0.533 0.152-0.214 0.355-0.512 0.489-0.721 0.032-0.051 0.074-0.116 0.093-0.144 0.096-0.147 0.39-0.648 0.517-0.88 0.122-0.223 0.18-0.332 0.285-0.54 0.066-0.13 0.123-0.24 0.128-0.244 0.006-0.006 0.045-0.013 0.182-0.036 0.017-0.002 0.068-0.014 0.113-0.026s0.090-0.022 0.098-0.024c0.008-0.002 0.055-0.017 0.103-0.034 0.574-0.198 1.043-0.594 1.336-1.129 0.091-0.165 0.191-0.423 0.222-0.571 0.003-0.014 0.012-0.057 0.021-0.094 0.041-0.182 0.059-0.53 0.037-0.719-0.014-0.117-0.022-0.168-0.026-0.175-0.002-0.003-0.006-0.026-0.010-0.051-0.016-0.113-0.094-0.36-0.155-0.499-0.010-0.023-0.019-0.043-0.020-0.046 0-0.003-0.006-0.014-0.012-0.026s-0.031-0.058-0.055-0.102c-0.149-0.284-0.392-0.568-0.664-0.775-0.274-0.209-0.676-0.39-0.973-0.439-0.025-0.004-0.106-0.019-0.128-0.023-0.145-0.027-0.553-0.026-0.711 0.001-0.087 0.015-0.202 0.039-0.252 0.054-0.796 0.215-1.416 0.805-1.674 1.588-0.025 0.072-0.064 0.226-0.071 0.273-0.001 0.011-0.005 0.037-0.009 0.057-0.013 0.075-0.016 0.1-0.024 0.175-0.013 0.142-0.005 0.526 0.012 0.556 0.001 0.003 0.005 0.030 0.009 0.060 0.030 0.255 0.164 0.612 0.328 0.877 0.073 0.117 0.2 0.282 0.28 0.364 0.063 0.065 0.063 0.051-0.006 0.187-0.035 0.067-0.073 0.141-0.086 0.164-0.012 0.023-0.043 0.078-0.067 0.123-0.074 0.138-0.226 0.402-0.295 0.515-0.007 0.011-0.028 0.046-0.046 0.077-0.017 0.031-0.040 0.068-0.050 0.082-0.009 0.014-0.033 0.051-0.051 0.082-0.151 0.245-0.422 0.637-0.637 0.92-0.076 0.102-0.148 0.197-0.16 0.211-0.010 0.014-0.047 0.062-0.082 0.104-0.034 0.042-0.067 0.084-0.074 0.093-0.036 0.047-0.344 0.411-0.384 0.453-0.008 0.009-0.057 0.063-0.108 0.118-0.050 0.057-0.125 0.137-0.165 0.179-0.1 0.107-0.497 0.503-0.602 0.602-0.048 0.044-0.11 0.103-0.139 0.129-0.028 0.027-0.093 0.085-0.144 0.13-0.050 0.045-0.098 0.086-0.104 0.093-0.038 0.035-0.139 0.121-0.165 0.141-0.016 0.013-0.040 0.033-0.051 0.044-0.012 0.011-0.031 0.028-0.041 0.036-0.011 0.008-0.094 0.076-0.184 0.15-0.585 0.479-1.417 1.059-2.078 1.45-0.020 0.011-0.056 0.033-0.080 0.047-0.058 0.035-0.412 0.241-0.466 0.271-0.023 0.013-0.060 0.034-0.082 0.047s-0.076 0.042-0.118 0.065c-0.042 0.023-0.081 0.044-0.088 0.048-0.010 0.007-0.104 0.058-0.329 0.177-0.277 0.147-0.812 0.403-1.019 0.488-0.034 0.014-0.075 0.032-0.093 0.040-0.155 0.071-0.519 0.209-0.818 0.312-0.274 0.095-0.739 0.236-0.834 0.254-0.013 0.002-0.038 0.009-0.056 0.014-0.018 0.006-0.043 0.013-0.058 0.015-0.014 0.003-0.092 0.022-0.172 0.041-0.159 0.039-0.397 0.091-0.533 0.115-0.016 0.003-0.077 0.014-0.134 0.025-0.057 0.011-0.126 0.023-0.154 0.027-0.028 0.003-0.061 0.008-0.072 0.010-0.011 0.003-0.037 0.007-0.057 0.010s-0.047 0.007-0.062 0.009c-0.014 0.003-0.048 0.007-0.077 0.010-0.028 0.003-0.063 0.008-0.077 0.010-0.027 0.004-0.107 0.013-0.257 0.031-0.026 0.002-0.072 0.007-0.103 0.011-0.063 0.007-0.107 0.010-0.242 0.020-0.050 0.004-0.109 0.008-0.129 0.010-0.245 0.026-1.193 0.026-1.451 0-0.020-0.002-0.082-0.006-0.139-0.010s-0.116-0.008-0.134-0.010c-0.016-0.002-0.066-0.007-0.108-0.011s-0.085-0.008-0.096-0.010-0.047-0.006-0.082-0.009c-0.035-0.004-0.096-0.011-0.136-0.016-0.039-0.005-0.091-0.012-0.113-0.015-0.041-0.005-0.251-0.039-0.309-0.050-0.159-0.031-0.259-0.051-0.371-0.078-0.215-0.050-0.679-0.187-0.762-0.224-0.011-0.005-0.093-0.037-0.181-0.072-0.359-0.139-0.674-0.299-1.016-0.513-0.061-0.038-0.114-0.073-0.12-0.077-0.005-0.004-0.070-0.051-0.144-0.104-0.514-0.368-0.944-0.811-1.309-1.347-0.1-0.147-0.258-0.403-0.329-0.533-0.018-0.031-0.045-0.082-0.062-0.113-0.098-0.177-0.233-0.462-0.314-0.664-0.073-0.181-0.167-0.444-0.194-0.546-0.005-0.017-0.019-0.064-0.031-0.103-0.011-0.040-0.024-0.081-0.026-0.093-0.003-0.011-0.019-0.074-0.035-0.139-0.029-0.11-0.087-0.402-0.098-0.484-0.003-0.020-0.007-0.050-0.010-0.067-0.002-0.017-0.008-0.056-0.011-0.086-0.004-0.031-0.008-0.063-0.010-0.072-0.009-0.050-0.023-0.212-0.032-0.397-0.012-0.243-0.007-0.6 0.011-0.793 0.011-0.115 0.016-0.168 0.021-0.201 0.003-0.020 0.007-0.060 0.010-0.087 0.003-0.029 0.007-0.059 0.010-0.067s0.006-0.039 0.010-0.067c0.003-0.029 0.018-0.114 0.032-0.19s0.029-0.15 0.031-0.165c0.003-0.014 0.007-0.033 0.009-0.041s0.007-0.030 0.010-0.046c0.004-0.024 0.083-0.329 0.102-0.391 0.001-0.006 0.008-0.031 0.015-0.057s0.039-0.122 0.070-0.216c0.223-0.666 0.541-1.302 0.984-1.966 0.073-0.11 0.142-0.212 0.153-0.226 0.010-0.014 0.077-0.104 0.149-0.201 0.114-0.154 0.182-0.243 0.238-0.309 0.009-0.011 0.035-0.044 0.058-0.072 0.023-0.029 0.043-0.054 0.047-0.057 0.003-0.003 0.022-0.026 0.041-0.050s0.045-0.056 0.057-0.068c0.011-0.011 0.046-0.050 0.077-0.086 0.25-0.29 0.766-0.811 0.988-0.999 0.014-0.011 0.040-0.034 0.057-0.049 0.018-0.016 0.092-0.079 0.165-0.14 0.074-0.062 0.143-0.119 0.155-0.13 0.012-0.009 0.057-0.044 0.101-0.077 0.043-0.033 0.078-0.063 0.078-0.066 0-0.004-0.014-0.048-0.031-0.1-0.069-0.201-0.211-0.706-0.309-1.095-0.035-0.139-0.072-0.287-0.082-0.329-0.011-0.042-0.022-0.089-0.025-0.103s-0.011-0.054-0.020-0.088c-0.009-0.034-0.019-0.073-0.022-0.088-0.002-0.014-0.010-0.049-0.016-0.077-0.006-0.029-0.013-0.059-0.015-0.067s-0.014-0.065-0.027-0.127c-0.023-0.105-0.032-0.121-0.056-0.099z"></path>
    </Icon>
  )
}

export default ReduxIcon