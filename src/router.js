import TemplateSolicitacao from '@/components/templates/TemplateSolicitacao'
import TemplateNovoUsuario from '@/components/templates/TemplateNovoUsuario'
// import PageLogin from '@/components/pages/PageLogin'

const routes = [
  {
    path: '/',
    component: TemplateSolicitacao,
  },
  {
    path: '/novo-usuario',
    component: TemplateNovoUsuario,
  }
]

export default routes