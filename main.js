// PDF Tools Data
const pdfTools = [
  {
    icon: 'bi-file-earmark-plus',
    title: 'Merge PDF',
    description: 'Combine PDFs in the order you want with the easiest PDF merger available.'
  },
  {
    icon: 'bi-scissors',
    title: 'Split PDF',
    description: 'Separate one page or a whole set for easy conversion into independent PDF files.'
  },
  {
    icon: 'bi-file-zip',
    title: 'Compress PDF',
    description: 'Reduce file size while optimizing for maximal PDF quality.'
  },
  {
    icon: 'bi-arrow-repeat',
    title: 'PDF Converter',
    description: 'Convert PDF files to and from any Microsoft Office format.'
  },
  {
    icon: 'bi-file-earmark-pdf',
    title: 'PDF to Word',
    description: 'Easily convert your PDF files into easy to edit DOC and DOCX documents.'
  },
  {
    icon: 'bi-file-earmark-word',
    title: 'Word to PDF',
    description: 'Make DOC and DOCX files easy to read by converting them to PDF.'
  },
  {
    icon: 'bi-file-earmark-ppt',
    title: 'Powerpoint to PDF',
    description: 'Turn your presentations into PDF documents.'
  },
  {
    icon: 'bi-file-earmark-excel',
    title: 'Excel to PDF',
    description: 'Convert your Excel spreadsheets to PDF documents.'
  }
];

const moreTools = [
  {
    icon: 'bi-image',
    title: 'PDF to JPG',
    description: 'Convert each PDF page into a JPG or extract all images contained in a PDF.'
  },
  {
    icon: 'bi-file-earmark-image',
    title: 'JPG to PDF',
    description: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins.'
  },
  {
    icon: 'bi-pencil-square',
    title: 'Edit PDF',
    description: 'Add text, images, shapes or freehand annotations to a PDF document.'
  },
  {
    icon: 'bi-droplet',
    title: 'Watermark',
    description: 'Stamp an image or text over your PDF in seconds. Choose the typography, transparency and position.'
  },
  {
    icon: 'bi-arrow-clockwise',
    title: 'Rotate PDF',
    description: 'Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once.'
  },
  {
    icon: 'bi-unlock',
    title: 'Unlock PDF',
    description: 'Remove PDF password security, giving you the freedom to use your PDFs as you want.'
  },
  {
    icon: 'bi-lock',
    title: 'Protect PDF',
    description: 'Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access.'
  },
  {
    icon: 'bi-file-earmark-text',
    title: 'Page Numbers',
    description: 'Add page numbers into PDFs with ease. Choose your positions, dimensions, typography.'
  }
];

// Render Tool Cards
function renderToolCards(tools, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = tools.map(tool => `
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="tool-card">
        <div class="tool-icon">
          <i class="${tool.icon}"></i>
        </div>
        <h5>${tool.title}</h5>
        <p>${tool.description}</p>
      </div>
    </div>
  `).join('');
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  renderToolCards(pdfTools, 'toolsGrid');
  renderToolCards(moreTools, 'moreToolsGrid');

  // Add smooth scroll behavior for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#signup' && href !== '#login') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.tool-card, .feature-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Add click handlers for tool cards
  document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h5').textContent;
      console.log(`Tool clicked: ${title}`);
    });
  });

  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow');
    } else {
      navbar.classList.remove('shadow');
    }
  });
});
