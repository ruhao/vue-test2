import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/about/about'
import AboutHonor from '../components/about/abouthonor'
import AboutCulture from '../components/about/aboutculture'
import Hr from '../components/hr/hr'
import Strategy from '../components/hr/strategy'
import Train from '../components/hr/train'
import Advertises from '../components/hr/advertises'
import InternetSever from '../components/internet/internetserver'
import Message from '../components/message/message'
import Kind from '../components/kind/kind'
import News from '../components/news/news'
import CompanyNews from '../components/news/companynews'
import IndustryDynamics from '../components/news/industrydynamics'
import Marketing from '../components/news/marketing'
import CompanyPhotos from '../components/news/companyphotos'
import Product from '../components/product/product'
import Upload from '../components/upload/upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/product',
      components: {
        default: Product,
      }
    },
    {
      path: '/upload',
      components: {
        default: Upload,
      }
    },
    {
      path: '/news',
      components: {
        default: News
      },
      children: [{
        path: "companynews",
        components: {
          default: CompanyNews
        }
      }, {
        path: "industrydynamics",
        components: {
          default: IndustryDynamics
        }
      }, {
        path: "marketing",
        components: {
          default: Marketing
        }
      }, {
        path: "companyphotos",
        components: {
          default: CompanyPhotos
        }
      }]
    },
    {
      path: '/kind',
      components: {
        default: Kind,
      }
    },
    {
      path: '/message',
      components: {
        default: Message,
      }
    },
    {
      path: '/internet',
      components: {
        default: InternetSever,
      }
    },
    {
      path: '/about',
      components: {
        default: About
      },
      children: [{
        path: "abouthonor",
        components: {
          default: AboutHonor
        },
      }, {
        path: "aboutculture",
        components: {
          default: AboutCulture
        }

      }]
    }, {
      path: '/hr',
      components: {
        default: Hr
      },
      children: [{
        path: "strategy",
        components: {
          default: Strategy
        },
      }, {
        path: "train",
        components: {
          default: Train
        }

      }, {
        path: "advertises",
        components: {
          default: Advertises
        }
      }]
    },
  ]
})
