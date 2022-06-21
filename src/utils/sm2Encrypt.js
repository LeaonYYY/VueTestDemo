import { sm2 } from 'sm-crypto'

const PUBLIC_KEY = '047e3177c510f0fd85fb2a7ca8b7cabf5b62395f41fc9e7acd332751b176b4b644f8837b0d4e88b004dcb89143dd66f3aa5672e15e056a1581ea260504fef5bec9'

export function encrypt (msg) {
  return '04' + sm2.doEncrypt(msg, PUBLIC_KEY)
}
