import {
  Container,
  Flex,
  TableContainer,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import RCTable from 'rc-table'
import React, { useEffect } from 'react'
import { doGetListing } from 'services/listing'

interface CoinInfo {
  id: number
  image: string
  name: string
  symbol: string
  price: string | number
  percent: string
  trend: 'up' | 'down'
  volume24h: string
  tvl: string
}

const Listing = () => {
  const { colorMode } = useColorMode()
  const textUp = useColorModeValue('red.500', 'red.600')
  const textDown = useColorModeValue('green.500', 'green.400')

  const colorTextName = useColorModeValue('blackAlpha.600', 'whiteAlpha.700')
  const colorTvl = useColorModeValue('black', 'white')

  const colorAction = useColorModeValue('#c99400', '#f0b90b')

  const items: CoinInfo[] = [
    {
      id: 1,
      image:
        'https://bin.bnbstatic.com/image/admin_mgs_image_upload/20201110/87496d50-2408-43e1-ad4c-78b47b448a6a.png',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: `$23,973.00`,
      percent: '1.96%',
      trend: 'down',
      volume24h: '29.210,89M',
      tvl: '$462.864,88M',
    },
    {
      id: 2,
      image:
        'https://bin.bnbstatic.com/image/admin_mgs_image_upload/20201110/3a8c9fe6-2a76-4ace-aa07-415d994de6f0.png',
      name: 'Ethereum',
      symbol: 'ETH',
      price: `$1,651.19`,
      percent: '-0.94%',
      trend: 'down',
      volume24h: '8.442,81M',
      tvl: '$202.042,92M',
    },
    {
      id: 3,
      image:
        'https://bin.bnbstatic.com/image/admin_mgs_image_upload/20210122/2b5c7d80-7bcd-4cfb-8bd9-d1760a752afc.png',
      name: 'TetherUS',
      symbol: 'USDT',
      price: `$1.00`,
      percent: '0.11%',
      trend: 'up',
      volume24h: '38.784,99M',
      tvl: '$70.687,74M',
    },
  ]

  useEffect(() => {
    const list = doGetListing()
  }, [])

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      render: (_: any, v: CoinInfo, index: any) => {
        return (
          <Flex alignItems={'center'}>
            <CoinImageStyle style={{ backgroundImage: `url(${v.image})` }} />
            <Text fontWeight={500} fontSize={16} ml={4}>
              {v.symbol}
            </Text>
            <Text fontWeight={400} fontSize={14} color={colorTextName} ml={12}>
              {v.name}
            </Text>
          </Flex>
        )
      },
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      render: (_: any, v: CoinInfo, index: any) => {
        return (
          <Text color={v.trend === 'up' ? textUp : textDown} fontWeight={500} fontSize={15}>
            {v.price}
          </Text>
        )
      },
    },
    {
      title: 'Thay đổi',
      dataIndex: 'price',
      key: 'price',
      render: (_: any, v: CoinInfo, index: any) => {
        return (
          <Text color={v.trend === 'up' ? textUp : textDown} fontWeight={600} fontSize={15}>
            {v.percent}
          </Text>
        )
      },
    },
    {
      title: 'KL 24h',
      dataIndex: 'price',
      key: 'price',
      render: (_: any, v: CoinInfo, index: any) => {
        return (
          <Text fontWeight={500} fontSize={16} color={colorTvl}>
            {v.volume24h}
          </Text>
        )
      },
    },
    {
      title: 'Vốn hoá thị trường',
      dataIndex: 'tvl',
      key: 'tvl',
      render: (_: any, v: CoinInfo, index: any) => {
        return (
          <Text fontWeight={500} fontSize={16} color={colorTvl}>
            {v.tvl}
          </Text>
        )
      },
    },
    {
      title: '',
      dataIndex: '',
      key: '',
      render: (_: any, v: CoinInfo, index: any) => {
        return (
          <Flex textAlign={'center'}>
            <Text fontWeight={500} fontSize={16} color={colorAction}>
              Chi tiết
            </Text>
            {/* <Text fontWeight={500} fontSize={16}>Giao dịch ngay</Text> */}
          </Flex>
        )
      },
    },
  ]

  return (
    <Container maxW={'6xl'} py={10}>
      <TableContainer>
        <TableWrapper theme={colorMode}>
          <RCTable<CoinInfo> columns={columns} data={items} rowKey="id" />
        </TableWrapper>
      </TableContainer>
    </Container>
  )
}

const CoinImageStyle = styled.div`
  margin: 0;
  min-width: 0;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  flex-shrink: 0;
`

const TableWrapper = styled.div`
  thead {
    tr {
      background-color: ${props => (props.theme === 'light' ? '#fafafa' : '#0B0E11')};
    }
  }

  tbody {
    tr {
      height: 64px;
      border-bottom: 1px solid ${props => (props.theme === 'light' ? '#eaecef' : '#474D57')};
      cursor: pointer;
      &:hover {
        background-color: ${props => (props.theme === 'light' ? '#fafafa' : '#0B0E11')};
      }
    }
  }
`

export default Listing
