(() => {
  const menuButton = document.querySelector('.menu-button');
  const navigation = document.querySelector('#site-nav');

  menuButton?.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation?.classList.toggle('nav-expanded', !expanded);
  });

  const dialog = document.querySelector('[data-search-dialog]');
  const input = dialog?.querySelector('[data-search-input]');
  const results = dialog?.querySelector('[data-search-results]');
  const status = dialog?.querySelector('[data-search-status]');
  let indexPromise;

  const getIndex = () => {
    indexPromise ||= fetch('/search-index.json')
      .then((response) => {
        if (!response.ok) throw new Error('Search index unavailable');
        return response.json();
      });
    return indexPromise;
  };

  const renderResults = (items, query) => {
    results.replaceChildren();
    if (query.length < 2) {
      status.textContent = 'Enter at least two characters.';
      return;
    }

    const words = query.toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const matches = items.filter((item) => {
      const haystack = [item.title, item.edition, ...(item.categories || []), ...(item.tags || [])]
        .join(' ')
        .toLocaleLowerCase();
      return words.every((word) => haystack.includes(word));
    }).slice(0, 12);

    status.textContent = matches.length ? `${matches.length} result${matches.length === 1 ? '' : 's'}` : 'No matching editions.';
    const fragment = document.createDocumentFragment();
    matches.forEach((item) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      const title = document.createElement('strong');
      const meta = document.createElement('span');
      link.href = item.url;
      title.textContent = item.title;
      meta.textContent = `${item.edition} · ${item.date}`;
      link.append(title, meta);
      li.append(link);
      fragment.append(li);
    });
    results.append(fragment);
  };

  document.querySelectorAll('[data-search-open]').forEach((button) => {
    button.addEventListener('click', () => {
      dialog?.showModal();
      input?.focus();
      getIndex().catch(() => {
        status.textContent = 'Search is temporarily unavailable.';
      });
    });
  });

  dialog?.querySelector('[data-search-close]')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  input?.addEventListener('input', async () => {
    try {
      renderResults(await getIndex(), input.value.trim());
    } catch {
      status.textContent = 'Search is temporarily unavailable.';
    }
  });
})();
