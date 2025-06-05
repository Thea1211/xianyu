import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">面试助手</h1>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                首页
              </Link>
              <Link href="#interview-assistance" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                面试辅助
              </Link>
              <Link href="#interview-coaching" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                面试辅导
              </Link>
              <Link href="#resume-modification" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                简历优化
              </Link>
              <Link href="/agent" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                客服
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">提供的服务</h2>
          
          {/* Interview Assistance */}
          <div id="interview-assistance" className="mb-20 scroll-mt-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">面试辅助</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  本人提供实时智能化面试支持，通过会议软件或者远程软件屏幕共享和GPT最新模型 4o 4.1 秒出答案，让您在面试中以最佳状态脱颖而出，大幅提升面试成功率。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">答案：开会议（腾讯/飞书/Zoom等）或者远程软件共享我的屏幕给你</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">设备：如果你面试需要共享屏幕，就使用两个设备，平板，手机都可以</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">声音：你打开跟我会议的麦克风，公放面试电脑设备的声音，会议软件会获取设备公放声音 也可以微信语音</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">过程：我根据面试官问题精炼prompt给GPT4o，引导GPT回答</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">知识库：支持定制知识库，你的简历项目等</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">算法题：算法题题目你可以远程软件共享屏幕给我，或者口述，或者微信拍照发我</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">算法题答案：图片直接生成最优代码、详细注释、思路、算法复杂度</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                {/* <Image 
                  src="/fuzhu.jpg" 
                  alt="面试辅助服务" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover p-8 bg-white dark:bg-gray-700 dark:invert"
                /> */}
                  <div className="mt-12">
            {/* <h4 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">实时响应演示</h4>
            
            <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-md"> */}
              <video 
                controls 
                width="400"
                height="225"
                className="w-full"
                poster="/fuzhu.jpg"
              >
                <source src="/测速.mp4" type="video/mp4" />
                您的浏览器不支持视频标签。
              </video>
            {/* </div> */}
          </div>
              </div>
            </div>
          </div>
          
          {/* Interview Coaching */}
          <div id="interview-coaching" className="mb-20 scroll-mt-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/interview-assistance.jpg" 
                  alt="面试辅导服务" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover p-8 bg-white dark:bg-gray-700 dark:invert"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">面试辅导</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  量身定制的面试策略和全方位训练计划，基于您的个人背景和目标公司文化，精准把握面试要点，显著提升您的竞争力和自信心。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">有大量春招秋招社招面试题</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">根据你的简历公司岗位辅导</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">进行完整面试模拟</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">纠正答案，给出面试建议</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">汇总面试常见问题给到你</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Resume Modification */}
          <div id="resume-modification" className="scroll-mt-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">简历优化</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  量身定制的简历优化服务，提升您的简历竞争力，显著增加面试机会。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">专业简历分析与评估，针对性提出改进建议</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">重新组织工作经验，突出成就和数据化结果</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">优化技能描述，使用行业关键词提高ATS通过率</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">量身定制简历模板，提升视觉吸引力和专业度</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">针对目标公司和岗位定制简历内容，提高匹配度</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">一对一的简历优化指导，打造让HR和招聘经理无法拒绝的简历</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/interview-coaching.jpg" 
                  alt="简历优化服务" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover p-8 bg-white dark:bg-gray-700 dark:invert"
                />
              </div>
            </div>
          </div>
          
          {/* 测速视频展示 */}
        
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">面试助手</h3>
              <p className="mt-2">您的专业面试伙伴</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition duration-300">服务条款</a>
              <a href="#" className="hover:text-white transition duration-300">隐私政策</a>
              <a href="#" className="hover:text-white transition duration-300">联系我们</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} 面试助手. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
