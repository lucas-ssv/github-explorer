import Styles from './home-styles.scss'
import React, { useState } from 'react'
import { Header } from '@/presentation/components'

export const Home: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    repositories: [],
    error: ''
  })

  return (
    <div className={Styles.homeWrap}>
      <Header />
      <section className={Styles.homeContent}>
        <h1>Explore repositórios no Github</h1>
        <form>
          <div className={Styles.formContent}>
            <input type="text" placeholder="Digite aqui" />
            <button data-testid="submit-button" type="submit" disabled>
              <strong>Pesquisar</strong>
              {state.isLoading && (
                <div data-testid="loading-wrap" className={Styles.loadingWrap}>
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjUwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KPGNpcmNsZSBjeD0iODQiIGN5PSI1MCIgcj0iMTAiIGZpbGw9IiNmZmZmZmYiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMC4yNXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMTA7MCIga2V5U3BsaW5lcz0iMCAwLjUgMC41IDEiIGJlZ2luPSIwcyI+PC9hbmltYXRlPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIGNhbGNNb2RlPSJkaXNjcmV0ZSIga2V5VGltZXM9IjA7MC4yNTswLjU7MC43NTsxIiB2YWx1ZXM9IiNmZmZmZmY7I2ZmZmZmZjsjZmZmZmZmOyNmZmZmZmY7I2ZmZmZmZiIgYmVnaW49IjBzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjE2IiBjeT0iNTAiIHI9IjEwIiBmaWxsPSIjZmZmZmZmIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIga2V5VGltZXM9IjA7MC4yNTswLjU7MC43NTsxIiB2YWx1ZXM9IjA7MDsxMDsxMDsxMCIga2V5U3BsaW5lcz0iMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDEiIGJlZ2luPSIwcyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIga2V5VGltZXM9IjA7MC4yNTswLjU7MC43NTsxIiB2YWx1ZXM9IjE2OzE2OzE2OzUwOzg0IiBrZXlTcGxpbmVzPSIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMSIgYmVnaW49IjBzIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBmaWxsPSIjZmZmZmZmIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIga2V5VGltZXM9IjA7MC4yNTswLjU7MC43NTsxIiB2YWx1ZXM9IjA7MDsxMDsxMDsxMCIga2V5U3BsaW5lcz0iMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDEiIGJlZ2luPSItMC4yNXMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVRpbWVzPSIwOzAuMjU7MC41OzAuNzU7MSIgdmFsdWVzPSIxNjsxNjsxNjs1MDs4NCIga2V5U3BsaW5lcz0iMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDEiIGJlZ2luPSItMC4yNXMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iODQiIGN5PSI1MCIgcj0iMTAiIGZpbGw9IiNmZmZmZmYiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDswLjI1OzAuNTswLjc1OzEiIHZhbHVlcz0iMDswOzEwOzEwOzEwIiBrZXlTcGxpbmVzPSIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMSIgYmVnaW49Ii0wLjVzIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDswLjI1OzAuNTswLjc1OzEiIHZhbHVlcz0iMTY7MTY7MTY7NTA7ODQiIGtleVNwbGluZXM9IjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxIiBiZWdpbj0iLTAuNXMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMTYiIGN5PSI1MCIgcj0iMTAiIGZpbGw9IiNmZmZmZmYiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDswLjI1OzAuNTswLjc1OzEiIHZhbHVlcz0iMDswOzEwOzEwOzEwIiBrZXlTcGxpbmVzPSIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMSIgYmVnaW49Ii0wLjc1cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIga2V5VGltZXM9IjA7MC4yNTswLjU7MC43NTsxIiB2YWx1ZXM9IjE2OzE2OzE2OzUwOzg0IiBrZXlTcGxpbmVzPSIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMSIgYmVnaW49Ii0wLjc1cyI+PC9hbmltYXRlPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+"
                    alt="Loading"
                  />
                </div>
              )}
            </button>
          </div>
          {state.error && <p data-testid="error" className={Styles.error}>error</p>}
        </form>
        {state.repositories.length
          ? (
          <div data-testid="repositories-wrap" className={Styles.repositoriesWrap}>
            <a href="#" className={Styles.repositoryLink}>
              <div className={Styles.repository}>
                <img
                  src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80"
                  alt="Image profile"
                />
                <div className={Styles.profileInfo}>
                  <strong>tiagoluchtenberg/repo</strong>
                  <p>Descrição do repo</p>
                </div>
              </div>
            </a>
          </div>
            )
          : <strong data-testid="message" className={Styles.message}>Nada para mostrar...</strong>}
      </section>
    </div>
  )
}
