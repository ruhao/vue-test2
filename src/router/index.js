import Vue from 'vue'
import Router from 'vue-router'
import Abouten from '../component/about/about'
import AboutHonoren from '../component/about/abouthonor'
import AboutCultureen from '../component/about/aboutculture'
import Hren from '../component/hr/hr'
import Strategyen from '../component/hr/strategy'
import Trainen from '../component/hr/train'
import Advertisesen from '../component/hr/advertises'
import Messageen from '../component/message/message'
import Newsen from '../component/news/news'
import CompanyNewsen from '../component/news/companynews'
import IndustryDynamicsen from '../component/news/industrydynamics'
import Marketingen from '../component/news/marketing'
import CompanyPhotosen from '../component/news/companyphotos'
import Producten from '../component/product/product'
import Branden from '../component/product/brand'
import About from '../components/about/about'
import AboutHonor from '../components/about/abouthonor'
import AboutCulture from '../components/about/aboutculture'
import Hr from '../components/hr/hr'
import Strategy from '../components/hr/strategy'
import Train from '../components/hr/train'
import Advertises from '../components/hr/advertises'
import Message from '../components/message/message'
import Kind from '../components/kind/kind'
import News from '../components/news/news'
import CompanyNews from '../components/news/companynews'
import IndustryDynamics from '../components/news/industrydynamics'
import Marketing from '../components/news/marketing'
import CompanyPhotos from '../components/news/companyphotos'
import Product from '../components/product/product'
import Brand from '../components/product/brand'
import Intmarket from '../components/internet/market'
import Upload from '../components/upload/upload'
import UploadJson from '../components/upload/uploadJson'
import Intmarketen from '../component/internet/market'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/product',
      components: {
        default: Product,
      }
    },
    {
      path: '/brand',
      components: {
        default: Brand,
      }
    },
    {
      path: '/upload',
      components: {
        default: Upload,
      }
    },
    {
      path: '/jsonupload',
      components: {
        default: UploadJson,
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
      path: '/intmarket',
      components: {
        default: Intmarket,
      }
    },
    {
      path: '/enintmarket',
      components: {
        default: Intmarketen,
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
      },
        {
          path: "enabouthonor",
          components: {
            default: AboutHonoren
          },
        }, {
          path: "enaboutculture",
          components: {
            default: AboutCultureen
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
    {
      path: '/enproduct',
      components: {
        default: Producten,
      }
    },
    {
      path: '/ennews',
      components: {
        default: Newsen
      },
      children: [{
        path: "encompanynews",
        components: {
          default: CompanyNewsen
        }
      }, {
        path: "enindustrydynamics",
        components: {
          default: IndustryDynamicsen
        }
      }, {
        path: "enmarketing",
        components: {
          default: Marketingen
        }
      }, {
        path: "encompanyphotos",
        components: {
          default: CompanyPhotosen
        }
      }]
    },

    {
      path: '/enmessage',
      components: {
        default: Messageen,
      }
    },
    {
      path: '/enbrand',
      components: {
        default: Branden,
      }
    },
    {
      path: '/enhr',
      components: {
        default: Hren
      },
      children: [{
        path: "enstrategy",
        components: {
          default: Strategyen
        },
      }, {
        path: "entrain",
        components: {
          default: Trainen
        }

      }, {
        path: "enadvertises",
        components: {
          default: Advertisesen
        }
      }]
    },
  ]
})
