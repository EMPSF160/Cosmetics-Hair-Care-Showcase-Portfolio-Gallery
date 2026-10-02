/**
 * HAIRÉA - Interactive Hair Diagnostic Engine
 * Generates custom bio-molecular formulas, recommended routines, and bespoke bottle monogramming
 */

const QuizEngine = {
  currentStep: 1,
  totalSteps: 7,
  answers: {
    hairType: "Curly (3A-3C)",
    scalpCondition: "Dry",
    strandThickness: "Medium",
    primaryGoals: ["Deep Hydration", "Frizz Control"],
    washFrequency: "2-3 times a week",
    scent: "Sandalwood & White Jasmine",
    monogramName: "MY BESPOKE RITUAL"
  },

  init() {
    this.renderStep();
    this.bindEvents();
  },

  setAnswer(key, value) {
    if (key === "primaryGoals") {
      if (!this.answers.primaryGoals) this.answers.primaryGoals = [];
      const index = this.answers.primaryGoals.indexOf(value);
      if (index > -1) {
        if (this.answers.primaryGoals.length > 1) {
          this.answers.primaryGoals.splice(index, 1);
        }
      } else {
        if (this.answers.primaryGoals.length < 3) {
          this.answers.primaryGoals.push(value);
        } else {
          App.toast("You can select up to 3 primary goals.");
        }
      }
    } else {
      this.answers[key] = value;
    }
    this.renderStep();
  },

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      this.renderStep();
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      this.calculateResults();
    }
  },

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.renderStep();
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  },

  renderStep() {
    const container = document.getElementById("quizStepContainer");
    const progressFill = document.getElementById("quizProgressFill");
    const stepNumberBadge = document.getElementById("quizStepNumber");
    if (!container) return;

    const percent = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (stepNumberBadge) stepNumberBadge.innerText = `Step 0${this.currentStep} of 0${this.totalSteps}`;

    switch (this.currentStep) {
      case 1:
        container.innerHTML = `
          <div class="text-center mb-4">
            <span class="editorial-tag">Strand Architecture</span>
            <h2 class="font-serif mt-2">What is your natural hair pattern?</h2>
            <p class="text-muted small">Select the texture that most closely matches your un-styled air-dried hair.</p>
          </div>
          <div class="row g-3">
            ${[
              { type: "Straight (1A-1C)", desc: "Lies flat from root to tip, prone to oiliness or lacking volume.", icon: "IMAGE/Hair Diagnostic Quiz.jpg" },
              { type: "Wavy (2A-2C)", desc: "S-shape bends with loose curves, prone to humidity frizz.", icon: "IMAGE/Hair Diagnostic Quiz1.jpg" },
              { type: "Curly (3A-3C)", desc: "Definite spiral loops & spring curls requiring moisture retention.", icon: "Hair Care Routines/oJCno19h4v-5mE4FmU3Q-UzQfyNpcVnS2fZiNLt7C4b-Ta9CK-KS9IJb3NGiD-Leue2n65fdBT2aTbEkFjCc0KksHJhvgpKiOzcgiwecod9Bo-slJKi153HXIAGmG2JHysoyXCc__2iN_BLRKp_4jqr1aQZxxIpqq-UpAbn5MUe.jpg" },
              { type: "Coily (4A-4C)", desc: "Tight zig-zag or micro-spiral coils with delicate moisture needs.", icon: "IMAGE/Hair Diagnostic Quiz21.jpg" }
            ].map(opt => `
              <div class="col-md-6">
                <div class="quiz-option-card ${this.answers.hairType === opt.type ? 'selected' : ''}" onclick="QuizEngine.setAnswer('hairType', '${opt.type}')">
                  <img src="${opt.icon}" class="rounded-3" style="width: 64px; height: 64px; object-fit: cover;">
                  <div class="flex-grow-1">
                    <h5 class="font-serif mb-1">${opt.type}</h5>
                    <p class="small text-muted mb-0">${opt.desc}</p>
                  </div>
                  <div class="quiz-option-radio"></div>
                </div>
              </div>
            `).join("")}
          </div>
        `;
        break;

      case 2:
        container.innerHTML = `
          <div class="text-center mb-4">
            <span class="editorial-tag">Scalp Biome Assessment</span>
            <h2 class="font-serif mt-2">How does your scalp feel 24 hours after washing?</h2>
            <p class="text-muted small">Your scalp is an extension of your facial skin barrier.</p>
          </div>
          <div class="row g-3">
            ${[
              { opt: "Oily", desc: "Greasy roots by evening; requires frequent cleansing to avoid limpness." },
              { opt: "Normal", desc: "Balanced moisture, no tightness or excessive sebum for 3-4 days." },
              { opt: "Dry", desc: "Feels tight, prone to light flaking or lack of natural sebum." },
              { opt: "Sensitive & Irritated", desc: "Easily red, itchy, or reacts quickly to synthetic fragrances." }
            ].map(item => `
              <div class="col-md-6">
                <div class="quiz-option-card ${this.answers.scalpCondition === item.opt ? 'selected' : ''}" onclick="QuizEngine.setAnswer('scalpCondition', '${item.opt}')">
                  <div class="flex-grow-1">
                    <h5 class="font-serif mb-1">${item.opt} Scalp</h5>
                    <p class="small text-muted mb-0">${item.desc}</p>
                  </div>
                  <div class="quiz-option-radio"></div>
                </div>
              </div>
            `).join("")}
          </div>
        `;
        break;

      case 3:
        container.innerHTML = `
          <div class="text-center mb-4">
            <span class="editorial-tag">Cortex Caliber</span>
            <h2 class="font-serif mt-2">What is your individual strand thickness?</h2>
            <p class="text-muted small">Test by rolling a single strand between your index finger and thumb.</p>
          </div>
          <div class="row g-3">
            ${[
              { thick: "Fine", desc: "Barely perceptible between fingers; weighs down easily with heavy oils." },
              { thick: "Medium", desc: "Feels like a standard cotton thread; adapts well to rich conditioners." },
              { thick: "Coarse / Thick", desc: "Distinct, strong wire-like texture; craves deep butter hydration." }
            ].map(item => `
              <div class="col-md-4">
                <div class="quiz-option-card text-center flex-column p-4 ${this.answers.strandThickness === item.thick ? 'selected' : ''}" onclick="QuizEngine.setAnswer('strandThickness', '${item.thick}')">
                  <h4 class="font-serif mb-2">${item.thick} Strand</h4>
                  <p class="small text-muted mb-3">${item.desc}</p>
                  <div class="quiz-option-radio mt-auto"></div>
                </div>
              </div>
            `).join("")}
          </div>
        `;
        break;

      case 4:
        container.innerHTML = `
          <div class="text-center mb-4">
            <span class="editorial-tag">Formulation Targets</span>
            <h2 class="font-serif mt-2">Select your top hair goals (Up to 3)</h2>
            <p class="text-muted small">Our bio-engine will concentrate active botanicals specifically targeting these.</p>
          </div>
          <div class="row g-3">
            ${[
              { goal: "Deep Hydration", tag: "Moisture Lock & Softness" },
              { goal: "Frizz Control", tag: "72-Hour Humidity Barrier" },
              { goal: "Bond & Damage Repair", tag: "Tri-Peptide Structural Fix" },
              { goal: "Scalp Detox & Root Lift", tag: "Rosemary & Apple Vinegar" },
              { goal: "Curl Definition & Bounce", tag: "Flaxseed Memory Gel" },
              { goal: "Color Protection & Tone", tag: "Anti-Brass Anthocyanins" },
              { goal: "Luminous Glass Gloss", tag: "Cold-Pressed Marula & Squalane" }
            ].map(g => `
              <div class="col-md-4 col-6">
                <div class="quiz-option-card ${this.answers.primaryGoals.includes(g.goal) ? 'selected' : ''}" onclick="QuizEngine.setAnswer('primaryGoals', '${g.goal}')">
                  <div class="flex-grow-1">
                    <h6 class="font-serif mb-1">${g.goal}</h6>
                    <span class="small text-muted" style="font-size: 0.72rem;">${g.tag}</span>
                  </div>
                  <div class="quiz-option-radio"></div>
                </div>
              </div>
            `).join("")}
          </div>
        `;
        break;

      case 5:
        container.innerHTML = `
          <div class="text-center mb-4">
            <span class="editorial-tag">Ritual Frequency</span>
            <h2 class="font-serif mt-2">How often do you wash and style your hair?</h2>
            <p class="text-muted small">Helps determine active concentration strength for maximum longevity.</p>
          </div>
          <div class="row g-3">
            ${[
              "Daily (Every 24h)",
              "2-3 times a week",
              "Once a week",
              "Every 10-14 days"
            ].map(freq => `
              <div class="col-md-6">
                <div class="quiz-option-card ${this.answers.washFrequency === freq ? 'selected' : ''}" onclick="QuizEngine.setAnswer('washFrequency', '${freq}')">
                  <div class="flex-grow-1">
                    <h5 class="font-serif mb-0">${freq}</h5>
                  </div>
                  <div class="quiz-option-radio"></div>
                </div>
              </div>
            `).join("")}
          </div>
        `;
        break;

      case 6:
        container.innerHTML = `
          <div class="text-center mb-4">
            <span class="editorial-tag">Olfactory Notes</span>
            <h2 class="font-serif mt-2">Choose your signature natural aroma</h2>
            <p class="text-muted small">Crafted in Grasse, France with 100% natural botanical extracts.</p>
          </div>
          <div class="row g-3">
            ${[
              { name: "Sandalwood & White Jasmine", notes: "Warm, grounding, sophisticated floral notes with creamy sandalwood." },
              { name: "Vanilla Bourbon & Rose Water", notes: "Sensual Damask rose paired with Madagascar roasted vanilla pod." },
              { name: "Crushed Eucalyptus & Herbaceous Mint", notes: "Invigorating spa freshness with purifying rosemary and tea tree." },
              { name: "Fragrance-Free (Pure Lab Formulation)", notes: "Zero aroma added; ideal for ultra-reactive skin." }
            ].map(scent => `
              <div class="col-md-6">
                <div class="quiz-option-card ${this.answers.scent === scent.name ? 'selected' : ''}" onclick="QuizEngine.setAnswer('scent', '${scent.name}')">
                  <div class="flex-grow-1">
                    <h5 class="font-serif mb-1">${scent.name}</h5>
                    <p class="small text-muted mb-0">${scent.notes}</p>
                  </div>
                  <div class="quiz-option-radio"></div>
                </div>
              </div>
            `).join("")}
          </div>
        `;
        break;

      case 7:
        container.innerHTML = `
          <div class="text-center mb-4">
            <span class="editorial-tag">Atelier Monogram</span>
            <h2 class="font-serif mt-2">Personalize Your Bottle Monogram</h2>
            <p class="text-muted small">Your bespoke formulation will be stamped with your custom title.</p>
          </div>
          <div class="row g-4 align-items-center justify-content-center">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label small text-muted">Enter Monogram Name (Max 24 Chars)</label>
                <input type="text" id="monogramInput" class="form-control form-control-lg rounded-pill px-4 text-uppercase fw-bold" value="${this.answers.monogramName}" maxlength="24" oninput="QuizEngine.updateMonogram(this.value)">
              </div>
              <p class="small text-muted">Example: <em>GENEVIEVE'S RITUAL</em>, <em>ELENA NO. 5</em>, <em>CURL ARCHITECT</em></p>
            </div>
            <div class="col-md-6">
              <div class="monogram-bottle-preview">
                <span class="bottle-formula-code">FORMULA #HR-${Math.floor(10000 + Math.random() * 90000)}</span>
                <div class="bottle-custom-name" id="bottlePreviewText">${this.answers.monogramName}</div>
                <div class="small opacity-75">Bespoke Hair Cleanser & Lipid Matrix</div>
                <div class="small mt-2 text-warning">✦ Hand-Blended in Atelier Lab</div>
              </div>
            </div>
          </div>
        `;
        break;
    }
    if (window.lucide) lucide.createIcons();
  },

  updateMonogram(val) {
    this.answers.monogramName = val.toUpperCase() || "MY BESPOKE RITUAL";
    const preview = document.getElementById("bottlePreviewText");
    if (preview) preview.innerText = this.answers.monogramName;
  },

  calculateResults() {
    const formulaCode = `HR-${Math.floor(10000 + Math.random() * 90000)}-${this.answers.hairType.split(" ")[0].toUpperCase()}`;
    const result = {
      formulaCode: formulaCode,
      hairType: this.answers.hairType,
      scalpCondition: this.answers.scalpCondition,
      strandThickness: this.answers.strandThickness,
      primaryGoals: this.answers.primaryGoals,
      scent: this.answers.scent,
      monogramName: this.answers.monogramName,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      botanicalMatrix: [
        { name: "Fermented Camellia Seed Extract", strength: "18.5%", role: "Lipid Matrix Reconstruction" },
        { name: "Tri-Peptide 29 Bio-Complex", strength: "9.2%", role: "Polypeptide Cortex Fortification" },
        { name: "Cold-Pressed Kalahari Squalane", strength: "12.0%", role: "Cuticle Shield & Detangling Glide" },
        { name: "Rosemary Active Stem Extract", strength: "6.4%", role: "Dermal Papilla Revitalization" }
      ],
      recommendedBundle: [
        Storage.getProducts()[0], // Botanical Silk Cleanser
        Storage.getProducts()[1], // Lipid Velvet Conditioner
        Storage.getProducts()[4]  // Luminous Glass Glossing Oil
      ],
      bundlePrice: 98.00,
      originalPrice: 116.00
    };

    Storage.setQuizResult(result);

    const container = document.getElementById("quizMainWrapper");
    if (!container) return;

    container.innerHTML = `
      <div class="glass-card p-4 p-md-5" data-aos="fade-up">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="editorial-tag mb-2">Trichology Diagnostic Complete</span>
          <h1 class="editorial-heading-md mb-2">Your Bespoke Formulation</h1>
          <div class="badge bg-dark text-warning px-3 py-2 fs-6 rounded-pill mb-3 font-monospace">
            FORMULA #${result.formulaCode}
          </div>
          <p class="text-muted">
            Engineered exclusively for <strong>${result.monogramName}</strong> based on your <em>${result.hairType}</em> pattern and <em>${result.scalpCondition} Scalp</em> profile.
          </p>
        </div>

        <div class="row g-4 mb-5">
          <!-- Monogram Preview Card -->
          <div class="col-lg-5">
            <div class="monogram-bottle-preview h-100 d-flex flex-column justify-content-center p-4 p-md-5">
              <span class="bottle-formula-code">LAB SPECIFICATION #${result.formulaCode}</span>
              <div class="bottle-custom-name my-3">${result.monogramName}</div>
              <p class="small text-light mb-4">Scent: <strong>${result.scent}</strong></p>
              
              <div class="border-top border-secondary pt-3 text-start">
                <div class="d-flex justify-content-between small mb-2">
                  <span class="text-muted">Hair Architecture:</span>
                  <span class="fw-bold">${result.hairType}</span>
                </div>
                <div class="d-flex justify-content-between small mb-2">
                  <span class="text-muted">Scalp Condition:</span>
                  <span class="fw-bold">${result.scalpCondition}</span>
                </div>
                <div class="d-flex justify-content-between small mb-2">
                  <span class="text-muted">Primary Targets:</span>
                  <span class="fw-bold text-warning">${result.primaryGoals.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Botanical Matrix Breakdown -->
          <div class="col-lg-7">
            <h4 class="font-serif mb-3">Custom Molecular Matrix Breakdown</h4>
            <div class="d-flex flex-column gap-3 mb-4">
              ${result.botanicalMatrix.map(b => `
                <div class="p-3 bg-white rounded-3 border">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="fw-bold font-serif">${b.name}</span>
                    <span class="badge bg-secondary text-dark">${b.strength} Concentrate</span>
                  </div>
                  <p class="small text-muted mb-0">${b.role}</p>
                </div>
              `).join("")}
            </div>
            <div class="p-3 bg-secondary rounded-3 d-flex align-items-center gap-3">
              <i data-lucide="shield-check" class="text-success" style="width: 28px; height: 28px;"></i>
              <div class="small">
                <strong>Certified Clean Formula:</strong> 0% Sulfates, 0% Silicones, 0% Parabens, 100% Vegan & Cruelty-Free.
              </div>
            </div>
          </div>
        </div>

        <!-- Recommended Routine Bundle -->
        <div class="border-top pt-5">
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
            <div>
              <span class="editorial-tag">3-Step Tailored Ritual</span>
              <h3 class="font-serif mb-1">Recommended Bespoke Trio Routine</h3>
              <p class="text-muted small mb-0">Cleanse, hydrate, and shield formulated to work in perfect molecular synergy.</p>
            </div>
            <div class="text-md-end mt-3 mt-md-0">
              <div class="d-flex align-items-baseline gap-2">
                <span class="fs-3 fw-bold">${App.formatPrice(result.bundlePrice)}</span>
                <span class="text-decoration-line-through text-muted small">${App.formatPrice(result.originalPrice)}</span>
                <span class="badge bg-danger text-white">SAVE 15%</span>
              </div>
            </div>
          </div>

          <div class="row g-3 mb-4">
            ${result.recommendedBundle.map((prod, i) => `
              <div class="col-md-4">
                <div class="d-flex align-items-center gap-3 p-3 bg-white rounded-3 border h-100">
                  <img src="${prod.image}" alt="${prod.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                  <div>
                    <span class="editorial-tag" style="font-size: 0.65rem;">Step 0${i+1}</span>
                    <h6 class="font-serif mb-0"><a href="product.html?id=${prod.id}">${prod.name}</a></h6>
                    <span class="small text-muted">${App.formatPrice(prod.price)}</span>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="d-flex flex-column flex-md-row gap-3">
            <button class="btn btn-hairea-gold py-3 flex-grow-1" onclick="QuizEngine.addBespokeBundleToCart(false)">
              Add 3-Step Bespoke Trio to Bag • ${App.formatPrice(result.bundlePrice)}
            </button>
            <button class="btn btn-hairea-dark py-3 px-4" onclick="QuizEngine.addBespokeBundleToCart(true)">
              Subscribe & Save (20% Off • ${App.formatPrice(result.bundlePrice * 0.8)})
            </button>
            <button class="btn btn-hairea-outline py-3 px-4" onclick="window.print()">
              Save Lab PDF
            </button>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) lucide.createIcons();
    App.toast("Bespoke formula generated and saved to your profile!");
  },

  addBespokeBundleToCart(isSub = false) {
    const res = Storage.getQuizResult();
    if (!res) return;

    res.recommendedBundle.forEach(prod => {
      App.addToCart(prod, isSub, "Every 6 Weeks");
    });
    App.toast("All 3 bespoke ritual formulas added to your bag!");
  },

  bindEvents() {
    //
  }
};

window.QuizEngine = QuizEngine;
