import React from 'react'
import Icon from 'components/Icon'

export const ReactIcon = ({ className, ...rest }) => {
  return (
    <Icon
      {...rest}
      className={className}>
      <path d="M18.85 16c0 1.574-1.276 2.85-2.85 2.85s-2.85-1.276-2.85-2.85c0-1.574 1.276-2.85 2.85-2.85s2.85 1.276 2.85 2.85zM26.825 11.3c-0.55-0.2-1.125-0.4-1.725-0.575 0.15-0.6 0.275-1.2 0.375-1.775 0.525-3.3-0.050-5.625-1.65-6.525-0.475-0.275-1-0.4-1.6-0.4-1.75 0-3.975 1.3-6.225 3.475-2.25-2.175-4.475-3.475-6.225-3.475-0.6 0-1.125 0.125-1.6 0.4-1.6 0.925-2.175 3.25-1.65 6.525 0.1 0.575 0.225 1.175 0.375 1.775-0.6 0.175-1.175 0.35-1.725 0.575-3.125 1.2-4.825 2.85-4.825 4.7s1.725 3.5 4.825 4.7c0.55 0.2 1.125 0.4 1.725 0.575-0.15 0.6-0.275 1.2-0.375 1.775-0.525 3.3 0.050 5.625 1.65 6.525 0.475 0.275 1 0.4 1.6 0.4 1.775 0 4-1.3 6.225-3.475 2.25 2.175 4.475 3.475 6.225 3.475 0.6 0 1.125-0.125 1.6-0.4 1.6-0.925 2.175-3.25 1.65-6.525-0.1-0.575-0.225-1.175-0.375-1.775 0.6-0.175 1.175-0.35 1.725-0.575 3.125-1.2 4.825-2.85 4.825-4.7s-1.7-3.5-4.825-4.7zM23.125 3.675c1.025 0.6 1.375 2.45 0.95 5.075-0.075 0.525-0.2 1.075-0.35 1.65-1.3-0.3-2.675-0.5-4.125-0.625-0.85-1.2-1.725-2.275-2.6-3.25 1.85-1.825 3.725-3.075 5.25-3.075 0.325 0 0.625 0.075 0.875 0.225zM20.325 18.5c-0.45 0.8-0.975 1.6-1.525 2.4-0.925 0.075-1.85 0.1-2.8 0.1-0.975 0-1.9-0.025-2.8-0.1-0.55-0.8-1.050-1.6-1.5-2.4-0.475-0.825-0.925-1.675-1.325-2.5 0.4-0.825 0.85-1.675 1.325-2.5 0.45-0.8 0.975-1.6 1.525-2.4 0.925-0.075 1.85-0.1 2.8-0.1 0.975 0 1.9 0.025 2.8 0.1 0.55 0.8 1.050 1.6 1.5 2.4 0.475 0.825 0.925 1.675 1.325 2.5-0.425 0.825-0.85 1.65-1.325 2.5zM22.4 17.675c0.375 0.875 0.675 1.725 0.95 2.575-0.85 0.2-1.75 0.35-2.7 0.475 0.3-0.475 0.625-0.975 0.9-1.5 0.3-0.525 0.575-1.050 0.85-1.55zM16 24.45c-0.6-0.65-1.175-1.35-1.725-2.075 0.575 0.025 1.15 0.050 1.725 0.050s1.15-0.025 1.725-0.050c-0.55 0.725-1.125 1.425-1.725 2.075zM11.35 20.7c-0.95-0.125-1.85-0.275-2.7-0.475 0.275-0.825 0.575-1.7 0.95-2.575 0.275 0.5 0.55 1.025 0.85 1.525 0.3 0.55 0.6 1.025 0.9 1.525zM9.6 14.325c-0.375-0.875-0.675-1.725-0.95-2.575 0.85-0.2 1.75-0.35 2.7-0.475-0.3 0.475-0.625 0.975-0.9 1.5-0.3 0.525-0.575 1.050-0.85 1.55zM16 7.55c0.6 0.65 1.175 1.35 1.725 2.075-0.575-0.025-1.15-0.050-1.725-0.050s-1.15 0.025-1.725 0.050c0.55-0.725 1.125-1.425 1.725-2.075zM21.55 12.8l-0.9-1.5c0.95 0.125 1.85 0.275 2.7 0.475-0.275 0.825-0.575 1.7-0.95 2.575-0.275-0.525-0.55-1.050-0.85-1.55zM7.925 8.75c-0.425-2.625-0.075-4.475 0.95-5.075 0.25-0.15 0.55-0.225 0.875-0.225 1.5 0 3.375 1.225 5.25 3.075-0.875 0.95-1.75 2.050-2.6 3.25-1.45 0.125-2.825 0.35-4.125 0.625-0.15-0.575-0.25-1.125-0.35-1.65zM1.75 16c0-1.175 1.425-2.425 3.925-3.35 0.5-0.2 1.050-0.375 1.6-0.525 0.4 1.25 0.9 2.575 1.5 3.9-0.6 1.325-1.125 2.625-1.5 3.875-3.45-1-5.525-2.5-5.525-3.9zM8.875 28.325c-1.025-0.6-1.375-2.45-0.95-5.075 0.075-0.525 0.2-1.075 0.35-1.65 1.3 0.3 2.675 0.5 4.125 0.625 0.85 1.2 1.725 2.275 2.6 3.25-1.85 1.825-3.725 3.075-5.25 3.075-0.325 0-0.625-0.075-0.875-0.225zM24.075 23.25c0.425 2.625 0.075 4.475-0.95 5.075-0.25 0.15-0.55 0.225-0.875 0.225-1.5 0-3.375-1.225-5.25-3.075 0.875-0.95 1.75-2.050 2.6-3.25 1.45-0.125 2.825-0.35 4.125-0.625 0.15 0.575 0.25 1.125 0.35 1.65zM26.325 19.35c-0.5 0.2-1.050 0.375-1.6 0.525-0.4-1.25-0.9-2.575-1.5-3.9 0.6-1.325 1.125-2.625 1.5-3.875 3.45 1 5.525 2.5 5.525 3.9 0 1.175-1.45 2.425-3.925 3.35z"></path>
    </Icon>
  )
}

export default ReactIcon