import ProductList from '@/components/supermarket/ProductList'
import PageMeta from '@/components/common/PageMeta'

const SupermarketPage = () => {
  return (
    <>
      <PageMeta
        title="Triv | Supermarket"
        description="Cari dan beli produk favoritmu di Supermarket Triv. Temukan berbagai pilihan produk berkualitas dengan harga terbaik."
        image="/triv-logo.png"
      />
      <main className="px-6 py-3">
        <ProductList />
      </main>
    </>
  )
}

export default SupermarketPage
