// ----- DATA -----
// natcon/ media/ people cluster 
// people: Nick Fuentes, Ben Shapiro, Charlie Kirk, Erika Kirk
// organisations: Turning Point USA, The Daily Wire, The Federalist, Pirate Wires
// platforms: X, Rumble, Pirate Wires
// ideas: Accelerationism, Post-liberalism, National Conservatism, Crypto-sovereignty
// movements: America First
// to add: Christopher Rufo, Michael Solana (Pirate Wires), The Heritage Foundation, The Claremont Institute, New College Florida - Ron DeSantis? 
// to add: crypto/ tech: Elon Musk 
// to add: Richard Hanania, Curtis Yarvin, Milo Yiannopoulos, Nick Land
// Analysis: US-UK cultural osmosis 
// Analysis: post-liberal merge with Catholocism? JD Vance 

const nodes = [
    {
      id: "Nick Fuentes",
      type: "person",
      cluster: "natcon",
      tier: 3,
      role: "Extremist influencer / taboo-pusher",
      function:
        "Operates at the outer edge: tests boundaries, escalates rhetoric, and supplies a 'hard' ideological pole that others react to.",
      audience:
        "Online, younger, highly politicised audiences; communities oriented around identity, grievance, and transgression. Fanbase named Groypers.", 
       why: "Edge actors can shift the centre by moving perceived boundaries and shaping downstream incentives.",
      img: undefined // Optional: "assets/nick-fuentes.png" or "nick-fuentes.png"
    },
    {
      id: "Ben Shapiro",
      type: "person",
      cluster: "media",
      tier: 2,
      role: "Mainstream conservative media entrepreneur",
      function:
        "Packages culture-war politics into scalable, institutional-friendly media formats.",
      audience:
        "Broad conservative and centre-right audiences; students and professionals.",
      why:
        "Demonstrates how ideology becomes monetisable, repeatable media.",
      img: undefined
    },
    {
      id: "Charlie Kirk",
      type: "person",
      cluster: "youth",
      tier: 2,
      role: "Youth mobilisation leader/ influencer. Died September 2025. Founder of Turning Point USA.", 
      function:
        "Builds organisational infrastructure that converts attention into recruitment and political capacity.",
      audience: "University students and young conservatives.",
      why: "Bridges cultural politics and organisational mobilisation.",
      img: "assets/charlie-kirk.webp"

    },
    {
      id: "Erika Kirk",
      type: "person", 
      cluster: "youth",
      tier: 2, 
      role: "CEO of Turning Point USA. Wife of Charlie Kirk.",
      function: 
        "Leads organisational operations and fundraising. Manages day-to-day operations of Turning Point USA.",
      audience: "Young conservatives and political activists.",
      why: "Key figure in the conservative youth movement.",
      img: undefined
    },
    {
      id: "Turning Point USA",
      type: "organisation",
      cluster: "youth",
      tier: 2,
      role: "Youth political organisation",
      function: "Provides events, funding pipelines, and activist infrastructure.",
      audience: "Campus-based conservative networks.",
      why: "Turns ideas into durable organisational capacity.",
      img: undefined
    },
    {
      id: "The Daily Wire",
      type: "organisation",
      cluster: "media",
      tier: 2,
      role: "Media company",
      function:
        "Professionalises and distributes conservative commentary at scale.",
      audience: "Mass conservative media consumers.",
      why: "Shows how ideology becomes an industry and a distribution machine.",
      img: undefined
    },
    {
      id: "America First",
      type: "movement",
      cluster: "natcon",
      tier: 3,
      role: "Movement / brand",
      function:
        "Aggregates nationalist and identitarian currents into a recognisable label.",
      audience: "Highly ideologised online communities.",
      why: "Illustrates how movements persist beyond single platforms.",
      img: undefined
    },
    {
      id: "X",
      type: "platform",
      cluster: "platform",
      tier: 1,
      role: "Mainstream social platform",
      function: "Primary amplification and contestation space.",
      audience: "General public and political elites.",
      why: "Key chokepoint between fringe and mainstream discourse.",
      img: undefined
    },
    {
      id: "Rumble",
      type: "platform",
      cluster: "platform",
      tier: 2,
      role: "Alternative video platform",
      function: "Provides hosting and monetisation for deplatformed figures.",
      audience: "Politically radicalised online audiences.",
      why: "Enables persistence of extremist content after mainstream moderation pressure.",
      img: undefined
    },
    {
      id: "Pirate Wires",
      type: "organisation",
      cluster: "media",
      tier: 2,
      role: "media company", 
      function: 
      "Distributes conservative rhetoric at scale. Amplifies conservative conspiracy theories and narratives. Content is part news journalism and part satire", 
      audience: "Conservative audiences and political elites.",
      why: "Key platform for conservative content and narrative amplification. Claims to be popular amongst young White House staffers. Demonstrates how conservative content can frame itself as ironic satire, while still being taken seriously by its audience.",
      img: undefined
    },
    {
      id: "The Federalist",
      type: "organisation",
      cluster: "media",
      tier: 2,
      role: "Media company",
      function: "Publishes conservative commentary and analysis.",
      audience: "Conservative audiences and political elites.",
      why: "Key platform for conservative commentary and analysis. Demonstrates how conservative thinkers seek to frame themselves as serious intellectuals, to gain institutional legitimacy.",
      img: undefined
    },
  
    // Tech accelerationism cluster
    {
      id: "Accelerationism",
      type: "idea",
      cluster: "tech accelerationism",
      tier: 1,
      role: "Ideological framework",
      function:
        "Central organizing concept: rapid technological change as pathway to political transformation.",
      audience: "Tech entrepreneurs, investors, and accelerationist thinkers.",
      why:
        "Acts as the ideological anchor connecting tech accelerationist actors and institutions.",
      img: undefined
    },
    {
      id: "Marc Andreessen",
      type: "person",
      cluster: "tech accelerationism",
      tier: 1,
      role: "Tech investor and accelerationist thinker",
      function:
        "Promotes technological acceleration as political solution; bridges Silicon Valley and right-wing politics.",
      audience: "Tech industry, investors, and political observers.",
      why:
        "Key figure articulating tech accelerationist vision with mainstream credibility.",
      img: undefined
    },
    {
      id: "a16z",
      type: "org",
      cluster: "tech accelerationism",
      tier: 1,
      role: "Venture capital firm",
      function:
        "Funds and promotes accelerationist tech projects; provides financial infrastructure.",
      audience: "Tech startups, entrepreneurs, and the broader tech ecosystem.",
      why: "Major financial conduit for accelerationist projects and ideas.",
      img: undefined
    },
    {
      id: "Peter Thiel",
      type: "person",
      cluster: "tech accelerationism",
      tier: 1,
      role: "Tech entrepreneur and investor",
      function:
        "Connects libertarian tech ideology with conservative politics; funds accelerationist projects.",
      audience: "Tech industry, conservative political networks, and investors.",
      why: "Influential bridge between tech capital and right-wing political movements.",
      img: undefined
    },
    {
      id: "Founders Fund",
      type: "org",
      cluster: "tech accelerationism",
      tier: 2,
      role: "Venture capital firm",
      function:
        "Invests in transformative technologies aligned with accelerationist goals.",
      audience: "Tech startups and entrepreneurs.",
      why: "Financial infrastructure supporting accelerationist tech development.",
      img: undefined
    },
    {
      id: "Palantir",
      type: "org",
      cluster: "tech accelerationism",
      tier: 2,
      role: "Data analytics company",
      function:
        "Provides surveillance and data infrastructure to government and defense sectors.",
      audience: "Government agencies, defense contractors, and security institutions.",
      why: "Demonstrates how accelerationist tech serves state power and surveillance.",
      img: undefined
    },
    {
      id: "Anduril",
      type: "org",
      cluster: "tech accelerationism",
      tier: 2,
      role: "Defense technology company",
      function:
        "Develops autonomous defense systems and border surveillance technology.",
      audience: "Military, border security, and defense sectors.",
      why: "Exemplifies accelerationist approach to defense and border control.",
      img: undefined
    },
  
    // Post-liberal conservatives cluster
    {
      id: "Post-liberalism",
      type: "idea",
      cluster: "post-liberalism",
      tier: 1,
      role: "Ideological framework",
      function:
        "Central organizing concept: critique of liberalism and proposal for post-liberal order.",
      audience: "Conservative intellectuals, academics, and policy thinkers.",
      why:
        "Acts as the ideological anchor connecting post-liberal thinkers and institutions.",
      img: undefined
    },
    {
      id: "Patrick Deneen",
      type: "person",
      cluster: "post-liberalism",
      tier: 1,
      role: "Political theorist and academic",
      function:
        "Articulates post-liberal critique of liberalism; provides intellectual foundation.",
      audience: "Conservative academics, intellectuals, and policy circles.",
      why: "Leading intellectual voice for post-liberal conservative movement.",
      img: undefined
    },
    {
      id: "Sohrab Ahmari",
      type: "person",
      cluster: "post-liberalism",
      tier: 1,
      role: "Editor and intellectual",
      function:
        "Popularizes post-liberal ideas through media; bridges theory and practice.",
      audience: "Conservative media consumers and intellectual audiences.",
      why:
        "Key popularizer connecting post-liberal theory to broader conservative discourse.",
      img: undefined
    },
    {
      id: "The American Conservative",
      type: "org",
      cluster: "post-liberalism",
      tier: 2,
      role: "Magazine and media outlet",
      function: "Publishes post-liberal conservative commentary and analysis.",
      audience:
        "Conservative intellectuals and readers interested in post-liberal thought.",
      why: "Primary media platform for post-liberal ideas and writers.",
      img: undefined
    },
    {
      id: "First Things",
      type: "org",
      cluster: "post-liberalism",
      tier: 2,
      role: "Religious and cultural magazine",
      function:
        "Publishes post-liberal thought with focus on religion and culture.",
      audience: "Religious conservatives, intellectuals, and cultural traditionalists.",
      why:
        "Important platform connecting post-liberalism to religious and cultural concerns.",
      img: undefined
    },
  
    // National conservatives cluster
    {
      id: "National Conservatism",
      type: "idea",
      cluster: "national conservatism",
      tier: 1,
      role: "Ideological framework",
      function:
        "Central organizing concept: conservative politics centered on nation-state and national identity.",
      audience:
        "National conservative politicians, intellectuals, and activists.",
      why:
        "Acts as the ideological anchor connecting national conservative actors and institutions.",
      img: undefined
    },
    {
      id: "NatCon Conference",
      type: "org",
      cluster: "national conservatism",
      tier: 1,
      role: "Conference and event organization",
      function: "Organizes major gathering point for national conservative movement.",
      audience:
        "National conservative politicians, intellectuals, and activists.",
      why: "Key institutional hub bringing together national conservative network.",
      img: undefined
    },
    {
      id: "Claremont Institute",
      type: "org",
      cluster: "national conservatism",
      tier: 2,
      role: "Think tank",
      function:
        "Develops and promotes national conservative ideas and policy proposals.",
      audience: "Conservative intellectuals, policy makers, and students.",
      why: "Important intellectual infrastructure for national conservative movement.",
      img: undefined
    },
    {
      id: "American Greatness",
      type: "org",
      cluster: "national conservatism",
      tier: 2,
      role: "Media outlet",
      function: "Publishes national conservative commentary and analysis.",
      audience: "National conservative readers and political observers.",
      why: "Media platform advancing national conservative ideas and narratives.",
      img: undefined
    },
  
    // Crypto sovereigntists cluster
    {
      id: "Crypto-sovereignty",
      type: "idea",
      cluster: "crypto-sovereignty",
      tier: 1,
      role: "Ideological framework",
      function:
        "Central organizing concept: cryptocurrency and blockchain as pathway to individual and institutional sovereignty.",
      audience:
        "Crypto industry, libertarian tech enthusiasts, and sovereignty-focused actors.",
      why:
        "Acts as the ideological anchor connecting crypto industry and sovereignty-focused projects.",
      img: undefined
    },
    {
      id: "Coinbase",
      type: "org",
      cluster: "crypto-sovereignty",
      tier: 1,
      role: "Cryptocurrency exchange",
      function:
        "Provides infrastructure for crypto transactions and mainstream crypto adoption.",
      audience: "Crypto users, investors, and mainstream financial sector.",
      why:
        "Major platform enabling crypto-sovereignty through accessible exchange infrastructure.",
      img: undefined
    },
    {
      id: "a16z crypto",
      type: "org",
      cluster: "crypto-sovereignty",
      tier: 1,
      role: "Crypto investment division",
      function:
        "Funds crypto and blockchain projects aligned with sovereignty goals.",
      audience: "Crypto startups, developers, and the crypto ecosystem.",
      why:
        "Financial infrastructure supporting crypto-sovereignty projects and innovation.",
      img: undefined
    }
  ];
  
  const links = [
    { source: "Nick Fuentes", target: "America First", kind: "affiliated" },
    { source: "Charlie Kirk", target: "Turning Point USA", kind: "leads" },
    { source: "Ben Shapiro", target: "The Daily Wire", kind: "employs" },
    { source: "The Daily Wire", target: "X", kind: "appears_on" },
    { source: "Charlie Kirk", target: "X", kind: "appears_on" },
    { source: "Nick Fuentes", target: "Rumble", kind: "hosts" },
    { source: "Erika Kirk", target: "Charlie Kirk", kind: "married"}, 
    { source: "Erika Kirk", target: "Turning Point USA", kind: "leads" },
  
    { source: "Marc Andreessen", target: "a16z", kind: "leads" },
    { source: "Marc Andreessen", target: "Accelerationism", kind: "influences" },
    { source: "Peter Thiel", target: "Founders Fund", kind: "leads" },
    { source: "Peter Thiel", target: "Palantir", kind: "leads" },
    { source: "Peter Thiel", target: "Accelerationism", kind: "influences" },
    { source: "a16z", target: "Accelerationism", kind: "funds" },
    { source: "Founders Fund", target: "Accelerationism", kind: "funds" },
    { source: "Palantir", target: "Accelerationism", kind: "affiliated" },
    { source: "Anduril", target: "Accelerationism", kind: "affiliated" },
    { source: "a16z", target: "a16z crypto", kind: "funds" },
  
    { source: "Patrick Deneen", target: "Post-liberalism", kind: "influences" },
    { source: "Sohrab Ahmari", target: "Post-liberalism", kind: "influences" },
    { source: "Patrick Deneen", target: "The American Conservative", kind: "appears_on" },
    { source: "Sohrab Ahmari", target: "The American Conservative", kind: "appears_on" },
    { source: "Patrick Deneen", target: "First Things", kind: "appears_on" },
    { source: "The American Conservative", target: "Post-liberalism", kind: "amplifies" },
    { source: "First Things", target: "Post-liberalism", kind: "amplifies" },
  
    { source: "National Conservatism", target: "NatCon Conference", kind: "influences" },
    { source: "NatCon Conference", target: "National Conservatism", kind: "amplifies" },
    { source: "Claremont Institute", target: "National Conservatism", kind: "influences" },
    { source: "American Greatness", target: "National Conservatism", kind: "amplifies" },
    { source: "Nick Fuentes", target: "National Conservatism", kind: "influences" },
    { source: "America First", target: "National Conservatism", kind: "affiliated" },
  
    { source: "Coinbase", target: "Crypto-sovereignty", kind: "affiliated" },
    { source: "a16z crypto", target: "Crypto-sovereignty", kind: "funds" }
  ];
  
  // ----- TOP-LEVEL VARIABLES (declare once, never redeclare) -----
  let svg, link, nodeGroups, simulation, width, height;
  const graphContainer = d3.select("#graph").node();
  const NODE_RADIUS = 26;
  const r = NODE_RADIUS;

  // ----- SVG SETUP -----
  function getDimensions() {
    const rect = graphContainer.getBoundingClientRect();
    const containerWidth = Math.max(rect.width || 760, 760);
    const containerHeight = rect.height;
    // Use container height when available (>0), otherwise fallback to ratio-based calculation
    const h = containerHeight > 0 ? containerHeight : Math.max(500, containerWidth * 0.55);
    return {
      width: containerWidth,
      height: Math.max(h, 500)
    };
  }
  
  // Initialize dimensions
  ({ width, height } = getDimensions());
  
  // Remove any existing SVG before creating new one
  d3.select("#graph").select("svg").remove();
  
  // Create SVG
  svg = d3
    .select("#graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid #ccc")
    .style("border-radius", "12px")
    .style("background", "rgba(255,255,255,0.35)");
  
  // ----- DEFS: ClipPath for circular images -----
  const defs = svg.append("defs");
  
  defs.append("clipPath")
    .attr("id", "node-clip")
    .attr("clipPathUnits", "userSpaceOnUse")
    .append("circle")
    .attr("r", NODE_RADIUS)
    .attr("cx", 0)
    .attr("cy", 0);
  
  // ----- LINKS -----
  link = svg
    .selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .attr("stroke", "#999")
    .attr("stroke-width", 1)
    .attr("stroke-opacity", 0.6);
  
  const colorByType = {
    person: "#2f2f2f",
    org: "#6b1f1f",
    platform: "#1f3f6b",
    movement: "#8b4513",
    idea: "#4a5568",
    institution: "#2c5282"
  };
  
  // ----- CATEGORY FIELD -----
  const clusterToCategory = {
    natcon: "national conservatism",
    post_liberal: "post-liberalism",
    tech_accel: "tech accelerationism",
    crypto_sov: "crypto-sovereignty",
    platform: "platform",
    media: "org/media",
    youth: "org/media"
  };
  
  nodes.forEach((node) => {
    node.category = node.category || clusterToCategory[node.cluster] || "org/media";
  });
  
  const categoryZones = {
    natcon: { x: 0.20, y: 0.25 },
    postlib: { x: 0.45, y: 0.20 },
    tech_accel: { x: 0.75, y: 0.25 },
    crypto: { x: 0.75, y: 0.70 },
    platform: { x: 0.20, y: 0.70 },
    "org/media": { x: 0.45, y: 0.75 }
  };
  
  const focusCategoryZones = {
    natcon: { x: 0.12, y: 0.32 },
    postlib: { x: 0.32, y: 0.32 },
    "org/media": { x: 0.52, y: 0.32 },
    tech_accel: { x: 0.72, y: 0.32 },
    crypto: { x: 0.88, y: 0.32 },
    platform: { x: 0.52, y: 0.72 }
  };
  
  function updateSimulationDimensions() {
    const dims = getDimensions();
    // Ensure dimensions are valid (never 0)
    width = Math.max(dims.width, 760);
    height = Math.max(dims.height, 500);
  
    svg.attr("width", width).attr("height", height);
  
    // Apply forces based on current mode
    applyForces();
  
    simulation.alpha(0.3).restart();
  }
  
  // ----- FOCUS MODE STATE -----
  let focusedNodeId = null;
  let neighborhood = new Set();
  let mapExpanded = false;
  
  // Build node lookup map once
  const nodeById = new Map(nodes.map(n => [n.id, n]));
  
  // Defensive ID getter for D3-mutated link endpoints
  function getEndpointId(x) {
    if (x == null) return null;
    if (typeof x === "string") return x;
    if (typeof x === "number") return String(x);
    if (typeof x === "object" && "id" in x) return x.id;
    return null;
  }
  
  // Clear all selection styles (stroke, stroke-width, classes)
  function clearSelectionStyles() {
    nodeGroups.each(function() {
      const nodeGroup = d3.select(this);
      const hoverCircle = nodeGroup.select(".node-hover");
      hoverCircle.attr("stroke", "none").attr("stroke-width", 3);
      nodeGroup.classed("selected", false);
    });
  }
  
  // Helper: check if node is currently focused (selected)
  function isFocused(d) {
    return focusedNodeId && d.id === focusedNodeId;
  }
  
  // Update label visibility based on mode
  // Focus mode (mapExpanded): show ALL labels
  // Normal mode: show only selected node label, hide others
  function updateLabelVisibility() {
    if (!nodeGroups) return;
    if (mapExpanded) {
      // Focus mode: all labels always visible
      nodeGroups.select("text").style("opacity", 1);
    } else {
      // Normal mode: only selected node label visible
      nodeGroups.select("text").style("opacity", d => (isFocused(d) ? 1 : 0));
    }
  }
  
  // Apply forces based on focus mode state
  function applyForces() {
    if (!simulation) return;
    const zones = mapExpanded ? focusCategoryZones : categoryZones;
    const categoryStrength = mapExpanded ? 0.24 : 0.15;
    
    // Ensure width and height are valid
    const w = Math.max(width, 760);
    const h = Math.max(height, 500);
    
    simulation
      .force("link", d3.forceLink(links).id((d) => d.id).distance(mapExpanded ? 140 : 120))
      .force("charge", d3.forceManyBody().strength(-520))
      .force("center", d3.forceCenter(w / 2, h / 2))
      .force("collide", d3.forceCollide(r + 8))
      .force("categoryX", d3.forceX((d) => (zones[d.category] || zones["org/media"]).x * w).strength(categoryStrength))
      .force("categoryY", d3.forceY((d) => (zones[d.category] || zones["org/media"]).y * h).strength(categoryStrength));
  }
  
  // Handle layout change (map expand/collapse)
  function handleLayoutChange() {
    // Get fresh dimensions after CSS transition
    const dims = getDimensions();
    // Ensure dimensions are valid (never 0)
    width = Math.max(dims.width, 760);
    height = Math.max(dims.height, 500);
    
    // Update SVG dimensions
    if (svg) {
      svg.attr("width", width).attr("height", height);
    }
    
    // Apply forces based on current mode
    if (simulation) {
      applyForces();
      // Restart simulation
      simulation.alpha(0.45).restart();
    }
    
    // Update label visibility after layout change
    updateLabelVisibility();
  }
  
  // Exit focus mode (map expansion)
  function exitFocusMode() {
    clearSelectionStyles();
    // Update label visibility after exiting focus mode
    updateLabelVisibility();
  }
  
  // Toggle map expanded state (focus mode)
  function toggleMapExpanded() {
    mapExpanded = !mapExpanded;
  
    const layout = document.querySelector(".layout");
    if (layout) layout.classList.toggle("map-expanded", mapExpanded);
  
    const focusBtn = document.getElementById("map-focus-btn");
    if (focusBtn) focusBtn.textContent = mapExpanded ? "Exit focus" : "Focus";
  
    // Update label visibility when entering/exiting focus mode
    updateLabelVisibility();
    
    if (!mapExpanded) {
      exitFocusMode();
    }
    
    // Wait for CSS grid transition to finish, then re-measure + restart
    // Use double requestAnimationFrame to ensure measurements reflect final layout
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        handleLayoutChange();
      });
    });
  }
  
  
  function computeNeighborhood(nodeId) {
    const neighborhoodSet = new Set([nodeId]);
    links.forEach((l) => {
      const sourceId = getEndpointId(l.source);
      const targetId = getEndpointId(l.target);
      if (sourceId === nodeId) neighborhoodSet.add(targetId);
      if (targetId === nodeId) neighborhoodSet.add(sourceId);
    });
    return neighborhoodSet;
  }
  
  function applyFocusMode(nodeId) {
    focusedNodeId = nodeId;
    neighborhood = computeNeighborhood(nodeId);
  
    nodeGroups.each(function (d) {
      const isNeighbor = neighborhood.has(d.id);
      const nodeGroup = d3.select(this);
  
      nodeGroup.style("opacity", isNeighbor ? 1 : 0.08);
      // Keep all nodes clickable - don't disable pointer events
      nodeGroup.style("pointer-events", "auto");
  
      const image = nodeGroup.select(".node-image");
      const fallback = nodeGroup.select(".node-fallback");
  
      if (isNeighbor && d.img) {
        image.style("display", "block");
        fallback.style("display", "none");
      } else {
        image.style("display", "none");
        fallback.style("display", "block");
      }
    });
  
    link.each(function (d) {
      const sourceId = getEndpointId(d.source);
      const targetId = getEndpointId(d.target);
      const isNeighborLink = neighborhood.has(sourceId) && neighborhood.has(targetId);
      d3.select(this).style("opacity", isNeighborLink ? 1 : 0.05);
    });
    
    // Update label visibility
    updateLabelVisibility();
  }
  
  function resetToOverview() {
    focusedNodeId = null;
    neighborhood.clear();
    
    clearSelectionStyles();
  
    nodeGroups.style("opacity", 1).style("pointer-events", "auto");
    link.style("opacity", 0.6);
  
    nodeGroups.each(function () {
      const nodeGroup = d3.select(this);
      nodeGroup.select(".node-image").style("display", "none");
      nodeGroup.select(".node-fallback").style("display", "block");
    });
  
    // Update label visibility (no focused node, so all hidden in normal mode)
    updateLabelVisibility();
  }
  
  // ----- SIMULATION -----
  simulation = d3.forceSimulation(nodes);
  applyForces();
  
  // ----- DRAG -----
  function drag(sim) {
    function dragstarted(event, d) {
      if (!event.active) sim.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    function dragended(event, d) {
      if (!event.active) sim.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    return d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended);
  }
  
  // ----- NODES -----
  nodeGroups = svg
    .selectAll("g.node")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .style("cursor", "pointer")
    .on("click", function (event, d) {
      event.stopPropagation();
      selectNodeById(d.id);
    })
    .call(drag(simulation));
  
  // Fallback circle
  nodeGroups
    .append("circle")
    .attr("r", r)
    .attr("fill", (d) => colorByType[d.type] || "#333")
    .attr("class", "node-fallback")
    .style("display", "block");
  
  // Image (hidden by default)
  function normalizeImgPath(img) {
    if (!img) return null;
    // if you pass "assets/foo.jpg", keep it. if you pass "foo.jpg", prefix it.
    return img.startsWith("assets/") ? img : `assets/${img}`;
  }
  
  nodeGroups
    .append("image")
    .attr("x", -r)
    .attr("y", -r)
    .attr("width", r * 2)
    .attr("height", r * 2)
    .attr("clip-path", "url(#node-clip)")
    .attr("class", "node-image")
    .each(function (d) {
      const href = normalizeImgPath(d.img);
      if (!href) return;
      // set both for compatibility
      d3.select(this).attr("href", href).attr("xlink:href", href);
    })
    .style("display", "none");
  
  // Hover stroke circle
  nodeGroups
    .append("circle")
    .attr("r", r)
    .attr("fill", "none")
    .attr("stroke", "none")
    .attr("stroke-width", 3)
    .attr("class", "node-hover")
    .style("pointer-events", "none");
  
  nodeGroups
    .on("mouseenter", (event, d) => {
      const nodeGroup = d3.select(event.currentTarget);
      nodeGroup.select(".node-hover").attr("stroke", "#000");
      // Show label on hover (only in normal mode; focus mode labels are always visible)
      if (!mapExpanded) {
        nodeGroup.select("text").style("opacity", 1);
      }
    })
    .on("mouseleave", (event, d) => {
      const nodeGroup = d3.select(event.currentTarget);
      nodeGroup.select(".node-hover").attr("stroke", "none");
      // Hide label on mouseout (only in normal mode; focus mode labels stay visible)
      // Keep label visible if it's the focused node
      if (!mapExpanded && !isFocused(d)) {
        nodeGroup.select("text").style("opacity", 0);
      }
    });
  
  // ----- LABELS -----
  nodeGroups
    .append("text")
    .text((d) => {
      if (d.id === "Turning Point USA") return "TPUSA";
      if (d.id === "The Daily Wire") return "Daily Wire";
      return d.id;
    })
    .attr("text-anchor", "middle")
    .attr("dy", r + 14)
    .attr("fill", "#111")
    .style("font-size", "11px")
    .style("font-weight", 500)
    .style("pointer-events", "none")
    .style("opacity", 0)
    .each(function (d) {
      const text = d3.select(this);
      const maxWidth = r * 2.5;
      if (this.getComputedTextLength() <= maxWidth) return;
  
      const words = d.id.split(" ");
      let truncated = words[0];
      let i = 1;
  
      while (
        i < words.length &&
        text.text(truncated + " " + words[i]).node().getComputedTextLength() < maxWidth
      ) {
        truncated += " " + words[i];
        i++;
      }
  
      if (i < words.length) truncated += "...";
      text.text(truncated);
    });
  
  // ----- TICK -----
  simulation.on("tick", () => {
    // Clamp nodes to bounds to prevent them from going off-screen
    // Padding must account for labels, not just node radius
    const EDGE_PAD = mapExpanded ? 55 : 95;
    
    // Ensure width and height are valid before clamping
    if (width > 0 && height > 0) {
      nodes.forEach((d) => {
        d.x = Math.max(EDGE_PAD, Math.min(width - EDGE_PAD, d.x));
        d.y = Math.max(EDGE_PAD, Math.min(height - EDGE_PAD, d.y));
      });
    }
  
    if (link) {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
    }
  
    if (nodeGroups) {
      nodeGroups.attr("transform", (d) => `translate(${d.x},${d.y})`);
    }
  });
  
  // ----- RESIZE -----
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => updateSimulationDimensions(), 250);
  });
  
  // ----- PANEL -----
  // Select node by ID (unified entry point for node selection)
  function selectNodeById(nodeId) {
    const node = nodeById.get(nodeId);
    if (!node) return;
    
    // Clear previous selection styles first
    clearSelectionStyles();
    
    focusedNodeId = nodeId;
    
    // Update panel content
    renderPanelContent(node);
    
    // Apply focus mode
    applyFocusMode(nodeId);
    
    // Update hover circles (set selected node stroke)
    nodeGroups.each(function (n) {
      const hc = d3.select(this).select(".node-hover");
      if (n.id === nodeId) {
        hc.attr("stroke", "#111");
      }
    });
    
    // Update label visibility (ensure selected node label is visible)
    updateLabelVisibility();
  }
  
  // Render panel content
  function renderPanelContent(node) {
    // Header
    document.getElementById("panel-title").textContent = node.id;
    // Meta line: show only node.type (no cluster/category)
    document.getElementById("panel-meta").textContent = node.type || "";
    
    // Overview section
    const overviewEl = document.getElementById("panel-overview");
    overviewEl.innerHTML = "";
    
    if (node.role) {
      const item = document.createElement("div");
      item.className = "panel-overview-item kv";
      const k = document.createElement("div");
      k.className = "k";
      k.textContent = "Role";
      const v = document.createElement("div");
      v.className = "v";
      v.textContent = node.role;
      item.appendChild(k);
      item.appendChild(v);
      overviewEl.appendChild(item);
    }
    
    if (node.function) {
      const item = document.createElement("div");
      item.className = "panel-overview-item kv";
      const k = document.createElement("div");
      k.className = "k";
      k.textContent = "Function";
      const v = document.createElement("div");
      v.className = "v";
      v.textContent = node.function;
      item.appendChild(k);
      item.appendChild(v);
      overviewEl.appendChild(item);
    }
    
    if (node.audience) {
      const item = document.createElement("div");
      item.className = "panel-overview-item kv";
      const k = document.createElement("div");
      k.className = "k";
      k.textContent = "Audience";
      const v = document.createElement("div");
      v.className = "v";
      v.textContent = node.audience;
      item.appendChild(k);
      item.appendChild(v);
      overviewEl.appendChild(item);
    }
    
    if (node.why) {
      const item = document.createElement("div");
      item.className = "panel-overview-item kv";
      const k = document.createElement("div");
      k.className = "k";
      k.textContent = "Why it matters";
      const v = document.createElement("div");
      v.className = "v";
      v.textContent = node.why;
      item.appendChild(k);
      item.appendChild(v);
      overviewEl.appendChild(item);
    }
    
    if (!node.role && !node.function && !node.audience && !node.why) {
      overviewEl.textContent = "—";
    }
    
    // Connections section
    const connectionsEl = document.getElementById("panel-connections");
    connectionsEl.innerHTML = "";
    const nodeConnections = links.filter(link => {
      const sourceId = getEndpointId(link.source);
      const targetId = getEndpointId(link.target);
      return sourceId === nodeId || targetId === nodeId;
    });
    
    if (nodeConnections.length === 0) {
      connectionsEl.textContent = "—";
    } else {
      const list = document.createElement("ul");
      list.className = "panel-connections-list";
      
      nodeConnections.forEach(link => {
        const sourceId = getEndpointId(link.source);
        const targetId = getEndpointId(link.target);
        const otherId = sourceId === nodeId ? targetId : sourceId;
        const otherNode = nodeById.get(otherId);
        const kind = link.kind || "—";
        
        const item = document.createElement("button");
        item.className = "panel-connection-item";
        item.innerHTML = `<strong>${otherNode ? otherNode.id : otherId}</strong><span>${kind}</span>`;
        item.addEventListener("click", () => {
          selectNodeById(otherId);
        });
        
        list.appendChild(item);
      });
      
      connectionsEl.appendChild(list);
    }
    
    // Tags section (placeholder)
    const tagsEl = document.getElementById("panel-tags");
    tagsEl.textContent = "—";
    
    // Sources section (placeholder)
    const sourcesEl = document.getElementById("panel-sources");
    sourcesEl.textContent = "—";
  }
  
  // Close panel
  function closePanel() {
    resetToOverview();
    document.getElementById("panel-title").textContent = "Click a node";
    document.getElementById("panel-meta").textContent = "";
    document.getElementById("panel-overview").innerHTML = "";
    document.getElementById("panel-connections").innerHTML = "";
    document.getElementById("panel-tags").textContent = "—";
    document.getElementById("panel-sources").textContent = "—";
    nodeGroups.select(".node-hover").attr("stroke", "none");
  }
  
  // Legacy function for compatibility (no longer used for panel expansion)
  function togglePanelExpanded() {
    // No-op, panel expansion removed
  }
  
  // Legacy function for compatibility
  function showPanel(d) {
    selectNodeById(d.id);
  }
  
  // ----- BACKGROUND CLICK -----
  svg.on("click", function (event) {
    const target = event.target;
    const isNode = target.closest && target.closest("g.node");
    const isLink = target.tagName === "line";
    if (!isNode && !isLink) {
      closePanel();
    }
  });
  
  // ----- ESC KEY -----
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closePanel();
    }
  });
  
  // ----- MAP FOCUS BUTTON -----
  const focusBtn = document.getElementById("map-focus-btn");
  if (focusBtn) {
    focusBtn.addEventListener("click", toggleMapExpanded);
  }
  
  // ----- PANEL CLOSE BUTTON -----
  const closeBtn = document.getElementById("panel-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closePanel);
  }
  
  // ---- About modal controls ----
  const aboutBtn = document.getElementById("aboutBtn");
  const aboutModal = document.getElementById("aboutModal");
  const aboutClose = document.getElementById("aboutClose");
  
  if (aboutBtn && aboutModal && aboutClose) {
    const openModal = () => {
      aboutModal.classList.add("open");
      aboutModal.setAttribute("aria-hidden", "false");
    };
    const closeModal = () => {
      aboutModal.classList.remove("open");
      aboutModal.setAttribute("aria-hidden", "true");
    };
  
    aboutBtn.addEventListener("click", openModal);
    aboutClose.addEventListener("click", closeModal);
    aboutModal.addEventListener("click", (e) => {
      if (e.target === aboutModal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

// Prototype modal logic
(function () {
  const STORAGE_KEY = "nrim_prototype_dismissed_v1";
  const modal = document.getElementById("prototypeModal");

  if (!modal) return;

  const continueBtn = document.getElementById("protoContinue");
  const dismissBtn = document.getElementById("protoDismiss");

  if (!localStorage.getItem(STORAGE_KEY)) {
    modal.classList.add("is-open");
  }

  function closeModal() {
    modal.classList.remove("is-open");
  }

  continueBtn.addEventListener("click", closeModal);

  dismissBtn.addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEY, "1");
    closeModal();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
})();

// Reopen prototype modal from the badge
(function () {
  const modal = document.getElementById("prototypeModal");
  const badge = document.getElementById("prototypeBadge");
  if (!modal || !badge) return;

  badge.addEventListener("click", () => {
    modal.classList.add("is-open");
  });
})();
  