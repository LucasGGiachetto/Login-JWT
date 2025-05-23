const data = [
  {
    "id": 1,
    "title": "Como ser mais produtivo em 2025",
    "summary": "Dicas práticas para organizar sua rotina e alcançar mais resultados.",
    "date": "2025-05-10",
    "views": 1243,
    "likes": 210
  },
  {
    "id": 2,
    "title": "As melhores linguagens de programação para iniciantes",
    "summary": "Comparação entre Python, JavaScript e outras linguagens populares.",
    "date": "2025-04-28",
    "views": 980,
    "likes": 165
  },
  {
    "id": 3,
    "title": "Entenda o que é Inteligência Artificial Generativa",
    "summary": "Um guia simples sobre o que é IA generativa e como ela funciona.",
    "date": "2025-05-01",
    "views": 1576,
    "likes": 312
  },
  {
    "id": 4,
    "title": "5 hábitos saudáveis para adotar ainda hoje",
    "summary": "Pequenas mudanças de rotina que trazem grandes resultados.",
    "date": "2025-05-15",
    "views": 842,
    "likes": 120
  },
  {
    "id": 5,
    "title": "Guia básico de investimentos para iniciantes",
    "summary": "O que você precisa saber antes de começar a investir.",
    "date": "2025-04-30",
    "views": 1340,
    "likes": 198
  }
]

function formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('pt-BR', options);
        }

        // Função para formatar números (views/likes)
        function formatNumber(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }

        // Renderizar os artigos
        const container = document.getElementById('articles-container');
        
        data.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'article-card';
            
            articleElement.innerHTML = `
                <div class="article-title">${article.title}</div>
                <div class="article-summary">${article.summary}</div>
                <div class="article-meta">
                    <div class="article-date">${formatDate(article.date)}</div>
                    <div class="article-stats">
                        <span class="views">${formatNumber(article.views)}</span>
                        <span class="likes">${formatNumber(article.likes)}</span>
                    </div>
                </div>
            `;
            
            container.appendChild(articleElement);
        });

module.exports = data;