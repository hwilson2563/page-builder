import Banner from '../components/templates/Banner'
import ButtonText from '../components/templates/ButtonText'
import FourImage from '../components/templates/FourImage'
import Gallery from '../components/templates/Gallery'
import LargeImage from '../components/templates/LargeImage'
import Linking from '../components/templates/Linking'
import OneImageText from '../components/templates/OneImageText'
import Product from '../components/templates/Product'
import Quote from '../components/templates/Quote'
import SingleButton from '../components/templates/SingleButton'
import TextOnly from '../components/templates/TextOnly'
import ThreeImage from '../components/templates/ThreeImage'
import TwoLargeImage from '../components/templates/TwoLargeImage'
import TwoSmallImage from '../components/templates/TwoSmallImage'
import BannerModal from '../components/modals/BannerModal'
import ButtonTextModal from '../components/modals/ButtonTextModal'
import FourImageModal from '../components/modals/FourImageModal'
import LargeImgModal from '../components/modals/LargeImgModal'
import LinkingModal from '../components/modals/LinkingModal'

export const templates = [
  {
    thumbnailImg: 'banner_temp.png',
    tempName: 'Banner Template',
    component: Banner,
    modal: BannerModal,
    modalData: [
      {
        label: 'Image url',
        name: 'image',
        value: '',
        error: null
      },
      {
        label: 'Image Atl Text',
        name: 'altText',
        value: '',
        error: null
      },
      {
        label: 'Title',
        name: 'title',
        value: '',
        error: null
      },
      {
        label: 'Subtitle',
        name: 'subtitle',
        value: '',
        error: null
      }
    ]
  },
  {
    thumbnailImg: 'button_text_temp.png',
    tempName: 'Button Text Template',
    component: ButtonText,
    modal: ButtonTextModal,
    modalData: [
      {
        label: 'Call To Action Text',
        name: 'call-to-action',
        value: '',
        error: null
      },
      {
        label: 'Button Text',
        name: 'button',
        value: '',
        error: null
      }
    ]
  },
  {
    thumbnailImg: 'four_img_temp.png',
    tempName: 'Four Image Template',
    component: FourImage,
    modal: FourImageModal,
    modalData: [
      {
        label: 'Section Title',
        name: 'section-title',
        value: '',
        error: null
      },
      {
        label: 'Image 1',
        name: 'image',
        value: '',
        error: null
      },
      {
        label: 'Image Alt Text',
        name: 'image-alt-text',
        value: '',
        error: null
      },
      {
        label: 'Subheader',
        name: 'subheader-text',
        value: '',
        error: null
      },
      {
        label: 'Body text',
        name: 'body-text',
        value: '',
        error: null
      },
      {
        label: 'Image 2',
        name: 'image',
        value: '',
        error: null
      },
      {
        label: 'Image Alt Text',
        name: 'image-alt-text',
        value: '',
        error: null
      },
      {
        label: 'Subheader',
        name: 'subheader-text',
        value: '',
        error: null
      },
      {
        label: 'Body text',
        name: 'body-text',
        value: '',
        error: null
      },
      {
        label: 'Image 3',
        name: 'image',
        value: '',
        error: null
      },
      {
        label: 'Image Alt Text',
        name: 'image-alt-text',
        value: '',
        error: null
      },
      {
        label: 'Subheader',
        name: 'subheader-text',
        value: '',
        error: null
      },
      {
        label: 'Body text',
        name: 'body-text',
        value: '',
        error: null
      },
      {
        label: 'Image 4',
        name: 'image',
        value: '',
        error: null
      },
      {
        label: 'Image Alt Text',
        name: 'image-alt-text',
        value: '',
        error: null
      },
      {
        label: 'Subheader',
        name: 'subheader-text',
        value: '',
        error: null
      },
      {
        label: 'Body text',
        name: 'body-text',
        value: '',
        error: null
      }
    ]
  },
  {
    thumbnailImg: 'gallery_temp.png',
    tempName: 'Gallery Template',
    component: Gallery,
    modal: null,
    modalData: [
      {
        // label: '',
        // name: '',
        // value: '',
        // error: null
      }
    ]
  },
  {
    thumbnailImg: 'large_img_temp.png',
    tempName: 'Large Image Template',
    component: LargeImage,
    modal: LargeImgModal,
    modalData: [
      {
        label: 'Image Url',
        name: 'image',
        value: '',
        error: null
      },
      {
        label: 'Image Alt Text',
        name: 'image-alt-text',
        value: '',
        error: null
      }
    ]
  },
  {
    thumbnailImg: 'linking_temp.png',
    tempName: 'Linking Template',
    component: Linking,
    modal: LinkingModal,
    modalData: [
      {
        label: 'Image Url',
        name: 'image',
        value: '',
        error: null
      },
      {
        label: 'Image Alt Text',
        name: 'image-alt-text',
        value: '',
        error: null
      },
      {
        label: 'Title',
        name: 'title',
        value: '',
        error: null
      },
      {
        label: 'Link',
        name: 'link',
        value: '',
        error: null
      },
      {
        label: 'Link Arial Label',
        name: 'link-aria-label',
        value: '',
        error: null
      }
    ]
  },
  {
    thumbnailImg: 'one_img_text_temp.png',
    tempName: 'One Image Text Template',
    component: OneImageText,
    modal: null,
    modalData: [
      {
        label: '',
        name: '',
        value: '',
        error: null
      }
    ]
  },
  {
    thumbnailImg: 'product_temp.png',
    tempName: 'Product Template',
    component: Product,
    modal: null,
    modalData: [
      {
        label: '',
        name: '',
        value: '',
        error: null
      }
    ]
  },
  {
    thumbnailImg: 'quote_temp.png',
    tempName: 'Quote Template',
    component: Quote,
    modal: null,
    modalData: [
      {
        label: '',
        name: '',
        value: '',
        error: null
      }
    ]
  },
  {
    thumbnailImg: 'single_button_temp.png',
    tempName: 'Single Button Template',
    component: SingleButton,
    modal: null,
    modalData: [
      {
        label: '',
        name: '',
        value: '',
        error: null
      }
    ]
  },
  {
    thumbnailImg: 'text_only_temp.png',
    tempName: 'Text Only Template',
    component: TextOnly,
    modal: null,
    modalData: [
      {
        label: '',
        name: '',
        value: '',
        error: null
      }
    ]
  },
  {
    thumbnailImg: 'three_img_temp.png',
    tempName: 'Three Image Template',
    component: ThreeImage,
    modal: null,
    modalData: [
      {
        label: '',
        name: '',
        value: '',
        error: null
      }
    ]
  },
  {
    thumbnailImg: 'two_large_img_temp.png',
    tempName: 'Two Large Image Template',
    component: TwoLargeImage,
    modal: null,
    modalData: [
      {
        label: '',
        name: '',
        value: '',
        error: null
      }
    ]
  },
  {
    thumbnailImg: 'two_small_img_temp.png',
    tempName: 'Two Small Image Template',
    component: TwoSmallImage,
    modal: null,
    modalData: [
      {
        label: '',
        name: '',
        value: '',
        error: null
      }
    ]
  }
]
