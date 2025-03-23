export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            翁晓敏
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Web 开发者 | UI 设计师 | 创意工作者
          </p>
          <p className="max-w-2xl mx-auto text-gray-500">
            欢迎来到我的个人网站。我专注于创建美观且用户友好的网络应用程序，
            热爱将创意想法转化为现实。
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">技能专长</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">0代码产品开发</h3>
            <p className="text-gray-600 mb-4">
              实操达人，自学Cursor、Claude、Coze等软件，制作网页/小程序/智能体等10+产品，开发周期缩短至3小时。
            </p>
            <div className="mt-4">
              <details className="cursor-pointer">
                <summary className="text-blue-600 hover:text-blue-700">查看项目列表</summary>
                <ul className="mt-2 pl-4 text-gray-600">
                  <li>• AI Agent智能体</li>
                  <li>• 图片压缩网站</li>
                  <li className="text-blue-600 hover:text-blue-700">
                    <a href="#">更多项目 →</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">AI狂热爱好者</h3>
            <p className="text-gray-600 mb-4">
              定期拆解A16Z最新Top100的AI产品的核心价值与潜在风险，拆解技术、体验、商业三维度。
            </p>
            <a 
              href="https://oc5dk59vnu.feishu.cn/docx/G1smdyjmloct8kxWZtGc2qSRnvc"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-700"
            >
              查看详细分析 →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Prompt Engineering深度玩家</h3>
            <p className="text-gray-600 mb-4">
              针对GPT系列及头部模型，累积编写近千个Prompt，对多个模型能力边界有深入把握。
            </p>
            <a 
              href="https://oc5dk59vnu.feishu.cn/docx/YowVd7zQco2balxGERncbjoInSc"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-700"
            >
              浏览Prompt案例 →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">联系我</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-600 mb-6">
            如果你对我的工作感兴趣，或者想要讨论潜在的合作机会，
            请随时通过以下方式联系我。
          </p>
          <div className="space-x-6">
            <a href="mailto:wengxiaomin125@163.com" className="text-blue-600 hover:text-blue-700">
              Email
            </a>
            <a href="https://github.com/11wxm" className="text-blue-600 hover:text-blue-700">
              GitHub
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
