import Styles from './header-styles.scss'
import React, { memo } from 'react'
import { Link, useParams } from 'react-router-dom'

const HeaderComponent: React.FC = () => {
  const { id } = useParams()

  return (
    <header className={Styles.headerWrap}>
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE2QzAgNy4xNjAwMiA3LjE2MDAyIDAgMTYgMEMyNC44NCAwIDMyIDcuMTYwMDIgMzEuOTk5OSAxNkMzMS45OTk5IDI0LjgzMiAyNC44Mzk5IDMxLjk5OTkgMTYgMzEuOTk5OUM3LjE2MDAyIDMxLjk5OTkgMCAyNC44MzIgMCAxNlpNNi4zOTk5NyAyNS42TDE5LjUwNCAxOS41MDRMMjUuNiA2LjM5OTk3TDEyLjQ5NiAxMi40OTZMNi4zOTk5NyAyNS42Wk0xNy43NiAxNkMxNy43NiAxNi45NjggMTYuOTc1OSAxNy43NiAxNiAxNy43NkMxNS4wMzIgMTcuNzYgMTQuMjM5OSAxNi45NjggMTQuMjM5OSAxNkMxNC4yMzk5IDE1LjAzMTkgMTUuMDMxOSAxNC4yMzk5IDE2IDE0LjIzOTlDMTYuOTc2IDE0LjIzOTkgMTcuNzYgMTUuMDMxOSAxNy43NiAxNloiIGZpbGw9IiMxMjEyMTQiLz4KPC9zdmc+Cg=="
        alt="Github Explorer"
      />
      <strong>github<span>_explorer</span></strong>
      {id && (
        <Link data-testid="back-link" to="/" className={Styles.backLink}>
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04IDEwLjVMMyA2TDggMS41TDYuNjAwNjYgLTQuNDQ4MDFlLTA4TDYuNjc1NTZlLTA3IDZMNi42MDA2NiAxMkw4IDEwLjVaIiBmaWxsPSIjQThBOEIzIi8+Cjwvc3ZnPgo=" />
          <strong>Voltar</strong>
        </Link>
      )}
    </header>
  )
}

export const Header = memo(HeaderComponent)
