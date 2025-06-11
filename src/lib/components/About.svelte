<script lang="ts">
  import Panel from "$lib/components/Panel.svelte";
  
  // Animation states
  let isVisible = false;
  
  // Mount animation
  import { onMount } from 'svelte';
  
  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });
</script>

<div class="landing-container" class:visible={isVisible}>
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-icon">🧬</span>
        <span>Metagenomics Research Platform</span>
      </div>
      
      <h1 class="hero-title">
        Karakteristik Komunitas Mikroba
        <span class="highlight">Rizosfer</span>
      </h1>
      
      <p class="hero-subtitle">
        Analisis dampak limbah perkotaan terhadap struktur dan keanekaragaman 
        komunitas bakteri di rizosfer melalui pendekatan metagenomik
      </p>
      
      <div class="hero-stats">
        <div class="stat">
          <div class="stat-number">27</div>
          <div class="stat-label">Sampel Metagenom</div>
        </div>
        <div class="stat">
          <div class="stat-number">5,548</div>
          <div class="stat-label">Fitur Unik (ASV)</div>
        </div>
        <div class="stat">
          <div class="stat-number">63.38%</div>
          <div class="stat-label">Variasi Data</div>
        </div>
      </div>
    </div>
    
    <div class="hero-visual">
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.2/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/2Bl1OS7gRcnwyfQ9/scene.splinecode"></spline-viewer>
    </div>
  </section>

  <!-- Research Overview -->
  <section class="overview">
    <div class="section-header">
      <h2>Gambaran Penelitian</h2>
      <p>Memahami respons mikroba rizosfer terhadap tekanan limbah perkotaan</p>
    </div>
    
    <div class="cards-grid">
      <Panel>
        <div class="card-content">
          <div class="card-icon">🔬</div>
          <h3>Metodologi</h3>
          <p>Sekuensing gen 16S rRNA (V3-V4) menggunakan platform Illumina MiSeq dengan analisis QIIME2, DADA2, dan PICRUSt2</p>
          <div class="card-tags">
            <span class="tag">16S rRNA</span>
            <span class="tag">QIIME2</span>
            <span class="tag">DADA2</span>
          </div>
        </div>
      </Panel>
      
      <Panel>
        <div class="card-content">
          <div class="card-icon">🌱</div>
          <h3>Fokus Penelitian</h3>
          <p>Analisis komunitas bakteri di zona rizosfer yang terpapar limbah domestik dan efluen air limbah perkotaan</p>
          <div class="card-tags">
            <span class="tag">Rizosfer</span>
            <span class="tag">Limbah Perkotaan</span>
            <span class="tag">Bioremediasi</span>
          </div>
        </div>
      </Panel>
      
      <Panel>
        <div class="card-content">
          <div class="card-icon">📊</div>
          <h3>Analisis Data</h3>
          <p>Evaluasi β-diversitas, klasifikasi taksonomi, dan prediksi fungsi genetik untuk identifikasi biomarker molekuler</p>
          <div class="card-tags">
            <span class="tag">β-diversitas</span>
            <span class="tag">PCoA</span>
            <span class="tag">Filogenetik</span>
          </div>
        </div>
      </Panel>
    </div>
  </section>

  <!-- Key Findings -->
  <section class="findings">
    <div class="section-header">
      <h2>Temuan Utama</h2>
      <p>Hasil analisis menunjukkan dominasi filum tertentu dan identifikasi biomarker penting</p>
    </div>
    
    <div class="findings-content">
      <div class="dominant-phyla">
        <h3>Filum Dominan</h3>
        <div class="phyla-bars">
          <div class="phyla-bar">
            <div class="bar-label">Proteobacteria</div>
            <div class="bar-fill" style="width: 85%"></div>
            <div class="bar-value">Dominan</div>
          </div>
          <div class="phyla-bar">
            <div class="bar-label">Actinobacteriota</div>
            <div class="bar-fill" style="width: 65%"></div>
            <div class="bar-value">Tinggi</div>
          </div>
          <div class="phyla-bar">
            <div class="bar-label">Firmicutes</div>
            <div class="bar-fill" style="width: 55%"></div>
            <div class="bar-value">Sedang</div>
          </div>
        </div>
      </div>
      
      <div class="biomarkers">
        <h3>Biomarker Molekuler</h3>
        <div class="biomarker-list">
          <div class="biomarker-item">
            <div class="biomarker-icon">🧬</div>
            <div class="biomarker-info">
              <div class="biomarker-name">rpoE (RNA polymerase sigma-70)</div>
              <div class="biomarker-function">Respons stres membran</div>
            </div>
          </div>
          <div class="biomarker-item">
            <div class="biomarker-icon">⚡</div>
            <div class="biomarker-info">
              <div class="biomarker-name">ABC-type transporters</div>
              <div class="biomarker-function">Transport molekul ATP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Key Genera -->
  <section class="genera">
    <div class="section-header">
      <h2>Genus Kunci</h2>
      <p>Mikroorganisme dengan peran penting dalam fiksasi nitrogen dan bioremediasi</p>
    </div>
    
    <div class="genera-grid">
      <div class="genus-card">
        <div class="genus-name">Pseudomonas</div>
        <div class="genus-function">Bioremediasi & Fiksasi Nitrogen</div>
      </div>
      <div class="genus-card">
        <div class="genus-name">Geobacter</div>
        <div class="genus-function">Reduksi Logam Berat</div>
      </div>
      <div class="genus-card">
        <div class="genus-name">Hydrogenophaga</div>
        <div class="genus-function">Degradasi Kontaminan</div>
      </div>
      <div class="genus-card">
        <div class="genus-name">Acidovorax</div>
        <div class="genus-function">Adaptasi Lingkungan</div>
      </div>
    </div>
  </section>

  <!-- Research Impact -->
  <section class="impact">
    <div class="section-header">
      <h2>Dampak Penelitian</h2>
      <p>Kontribusi untuk strategi pemantauan dan pemulihan ekosistem tanah</p>
    </div>
    
    <div class="impact-content">
      <div class="impact-text">
        <h3>Signifikansi Ilmiah</h3>
        <p>
          Penelitian ini memberikan pemahaman mendalam tentang adaptasi mikroba rizosfer 
          terhadap tekanan limbah perkotaan. Identifikasi taksa kunci dan biomarker molekuler 
          dapat membantu pengembangan strategi bioremediasi dan monitoring kesehatan 
          ekosistem tanah di lingkungan perkotaan.
        </p>
        
        <div class="applications">
          <div class="application">
            <span class="app-icon">🌍</span>
            <span>Pemantauan Lingkungan</span>
          </div>
          <div class="application">
            <span class="app-icon">🔧</span>
            <span>Strategi Bioremediasi</span>
          </div>
          <div class="application">
            <span class="app-icon">🏙️</span>
            <span>Pengelolaan Perkotaan</span>
          </div>
        </div>
      </div>
      
      <div class="research-data">
        <div class="data-point">
          <div class="data-number">52%</div>
          <div class="data-description">Akurasi Validasi NCBI BLAST</div>
        </div>
        <div class="data-point">
          <div class="data-number">9,195</div>
          <div class="data-description">Fitur Genetik Teridentifikasi</div>
        </div>
        <div class="data-point">
          <div class="data-number">31%</div>
          <div class="data-description">Bakteri Uncultured (Naive Bayes)</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-info">
        <h4>Institut Teknologi Bandung</h4>
        <p>Sekolah Teknik Elektro dan Informatika</p>
        <p>IF3211 Komputasi Domain Spesifik 2024/2025</p>
      </div>
      
      <div class="authors">
        <div class="author">Raden Rafly Hanggaraksa Budiarto</div>
        <div class="author">Dhafin Fawwaz Ikramullah</div>
        <div class="author">Muhammad Dava Fathurrahman</div>
      </div>
    </div>
  </footer>
</div>

<style lang="postcss">
  .landing-container {
    min-height: 100vh;
    background: #ffffff;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease-out;
  }
  
  .landing-container.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Hero Section */
  .hero {
    display: flex;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
    background: #ffffff;
    position: relative;
    overflow: hidden;
  }
  
  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23475569' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    z-index: 0;
  }
  
  .hero-content {
    flex: 1;
    max-width: 600px;
    z-index: 1;
    position: relative;
    padding-right: 2rem;
  }
  
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #667eea;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    margin-bottom: 2rem;
    font-size: 0.9rem;
    font-weight: 500;
  }
  
  .badge-icon {
    font-size: 1.2rem;
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #1e293b;
  }
  
  .highlight {
    background: linear-gradient(45deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 3rem;
    color: #64748b;
  }
  
  .hero-stats {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
  
  .stat {
    text-align: center;
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #667eea;
  }
  
  .stat-label {
    font-size: 0.9rem;
    color: #64748b;
    margin-top: 0.5rem;
  }
  
  .hero-visual {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    z-index: 0;
  }
  
  spline-viewer {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* Sections */
  section {
    padding: 5rem 2rem;
  }
  
  .overview, .findings, .genera, .impact {
    background: #ffffff;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .section-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
  }
  
  .section-header p {
    font-size: 1.1rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
  }

  /* Cards Grid */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .card-content {
    padding: 2rem;
    height: 100%;
  }
  
  .card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .card-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1rem;
  }
  
  .card-content p {
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .card-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  
  .tag {
    background: #e2e8f0;
    color: #475569;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    font-weight: 500;
  }

  /* Findings */
  .findings {
    background: #ffffff;
  }
  
  .findings-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .dominant-phyla h3, .biomarkers h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 2rem;
  }
  
  .phyla-bars {
    space-y: 1rem;
  }
  
  .phyla-bar {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .bar-label {
    min-width: 140px;
    font-weight: 500;
    color: #374151;
  }
  
  .bar-fill {
    height: 12px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 6px;
    flex: 1;
    transition: width 1s ease-out;
  }
  
  .bar-value {
    min-width: 80px;
    text-align: right;
    font-weight: 500;
    color: #6b7280;
  }
  
  .biomarker-list {
    space-y: 1.5rem;
  }
  
  .biomarker-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
    border: 1px solid #e2e8f0;
  }
  
  .biomarker-icon {
    font-size: 2rem;
  }
  
  .biomarker-name {
    font-weight: 600;
    color: #1e293b;
  }
  
  .biomarker-function {
    font-size: 0.9rem;
    color: #64748b;
  }

  /* Genera */
  .genera {
    background: #ffffff;
  }
  
  .genera-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .genus-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
  }
  
  .genus-card:hover {
    transform: translateY(-4px);
    border-color: #667eea;
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.15);
  }
  
  .genus-name {
    font-size: 1.3rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }
  
  .genus-function {
    color: #64748b;
    font-weight: 500;
  }

  /* Impact */
  .impact-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    align-items: start;
  }
  
  .impact-text h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1.5rem;
  }
  
  .impact-text p {
    color: #64748b;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
  
  .applications {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .application {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
  }
  
  .app-icon {
    font-size: 1.5rem;
  }
  
  .research-data {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
  }
  
  .data-point {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .data-point:last-child {
    margin-bottom: 0;
  }
  
  .data-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #667eea;
  }
  
  .data-description {
    color: #64748b;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }

  /* Footer */
  .footer {
    background: #1e293b;
    color: white;
    padding: 3rem 2rem;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: start;
    max-width: 1200px;
    margin: 0 auto;
    gap: 2rem;
  }
  
  .footer-info h4 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .footer-info p {
    color: #94a3b8;
    margin-bottom: 0.5rem;
  }
  
  .authors {
    text-align: right;
  }
  
  .author {
    color: #94a3b8;
    margin-bottom: 0.5rem;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
      text-align: center;
    }
    
    .hero-stats {
      justify-content: center;
    }
    
    .findings-content {
      grid-template-columns: 1fr;
    }
    
    .impact-content {
      grid-template-columns: 1fr;
    }
    
    .footer-content {
      flex-direction: column;
      text-align: center;
    }
    
    .authors {
      text-align: center;
    }
  }
</style>