import Vue from 'vue'
import Router from 'vue-router'
import Abouten from '../component/about/about'
import AboutHonoren from '../component/about/abouthonor'
import AboutCultureen from '../component/about/aboutculture'
import Hren from '../component/hr/hr'
import Strategyen from '../component/hr/strategy'
import Trainen from '../component/hr/train'
import Advertisesen from '../component/hr/advertises'
import InternetSeveren from '../component/internet/internetserver'
import Messageen from '../component/message/message'
import Kinden from '../component/kind/kind'
import Newsen from '../component/news/news'
import CompanyNewsen from '../component/news/companynews'
import IndustryDynamicsen from '../component/news/industrydynamics'
import Marketingen from '../component/news/marketing'
import CompanyPhotosen from '../component/news/companyphotos'
import Producten from '../component/product/product'
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
import Brand from '../components/product/brand'
import Upload from '../components/upload/upload'


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
      path: '/enkind',
      components: {
        default: Kinden,
      }
    },
    {
      path: '/enmessage',
      components: {
        default: Messageen,
      }
    },
    {
      path: '/eninternet',
      components: {
        default: InternetSeveren,
      }
    },
    {
      path: '/enabout',
      components: {
        default: Abouten
      },
      children: [{
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
