import type { NextPage } from 'next'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import UserInformation from 'ui/components/UserInformation/UserInformation'

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os Profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localdiade'}
      />
      <UserInformation
        picture={'https://github.com/Tatu-Armadillo.png'}
        name={'dedo'}
        rating={3}
        description={'Varzea Grande'}
      />
    </div>
  )
}

export default Home
