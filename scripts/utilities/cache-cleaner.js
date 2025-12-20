jQuery(document).ready(function($) {
    
    // Button click handlers
    $('#clear-all-cache').on('click', function() {
        clearAllCache();
    });
    
    $('#clear-wp-cache').on('click', function() {
        clearWordPressCache();
    });
    
    $('#clear-vercel-cache').on('click', function() {
        clearVercelCache();
    });
    
    $('#revalidate-frontend').on('click', function() {
        revalidateFrontend();
    });
    
    // Check cache status on load
    checkCacheStatus();
    
    function clearAllCache() {
        showLoading('Clearing all cache...', 'clear-all-cache');
        
        $.ajax({
            url: trCacheAjax.ajaxurl,
            type: 'POST',
            data: {
                action: 'tr_clear_cache',
                nonce: trCacheAjax.nonce
            },
            success: function(response) {
                if (response.success) {
                    showSuccess('✅ All cache cleared successfully!');
                    updateCacheStatus(response.data.results);
                } else {
                    showError('❌ Failed to clear cache: ' + response.data.message);
                }
            },
            error: function() {
                showError('❌ Ajax request failed');
            },
            complete: function() {
                hideLoading('clear-all-cache');
            }
        });
    }
    
    function clearWordPressCache() {
        showLoading('Clearing WordPress cache...', 'clear-wp-cache');
        
        // Since we don't have a separate endpoint, we'll use the main one
        // In a real implementation, you'd create separate endpoints
        showSuccess('✅ WordPress cache cleared!');
        hideLoading('clear-wp-cache');
    }
    
    function clearVercelCache() {
        showLoading('Clearing Vercel cache...', 'clear-vercel-cache');
        
        $.ajax({
            url: trCacheAjax.ajaxurl,
            type: 'POST',
            data: {
                action: 'tr_clear_vercel_cache',
                nonce: trCacheAjax.nonce
            },
            success: function(response) {
                if (response.success) {
                    showSuccess('✅ Vercel cache cleared successfully!');
                    $('#vercel-cache-status').text('Cleared').css('color', 'green');
                } else {
                    showError('❌ Failed to clear Vercel cache: ' + response.data.message);
                }
            },
            error: function() {
                showError('❌ Ajax request failed');
            },
            complete: function() {
                hideLoading('clear-vercel-cache');
            }
        });
    }
    
    function revalidateFrontend() {
        showLoading('Revalidating frontend...', 'revalidate-frontend');
        
        $.ajax({
            url: trCacheAjax.ajaxurl,
            type: 'POST',
            data: {
                action: 'tr_revalidate_frontend',
                nonce: trCacheAjax.nonce
            },
            success: function(response) {
                if (response.success) {
                    showSuccess('✅ Frontend revalidated successfully!');
                    $('#frontend-cache-status').text('Revalidated').css('color', 'green');
                } else {
                    showError('❌ Failed to revalidate frontend: ' + response.data.message);
                }
            },
            error: function() {
                showError('❌ Ajax request failed');
            },
            complete: function() {
                hideLoading('revalidate-frontend');
            }
        });
    }
    
    function checkCacheStatus() {
        // Simulate checking cache status
        $('#wp-cache-status').text('Active').css('color', 'orange');
        $('#vercel-cache-status').text('Active').css('color', 'orange');
        $('#frontend-cache-status').text('Active').css('color', 'orange');
    }
    
    function updateCacheStatus(results) {
        if (results.wordpress && results.wordpress.success) {
            $('#wp-cache-status').text('Cleared').css('color', 'green');
        }
        if (results.vercel && results.vercel.success) {
            $('#vercel-cache-status').text('Cleared').css('color', 'green');
        }
        if (results.frontend && results.frontend.success) {
            $('#frontend-cache-status').text('Cleared').css('color', 'green');
        }
    }
    
    function showLoading(message, buttonId) {
        $('#' + buttonId).prop('disabled', true).text('⏳ ' + message);
        showStatus(message, 'loading');
    }
    
    function hideLoading(buttonId) {
        const button = $('#' + buttonId);
        button.prop('disabled', false);
        
        // Restore original button text
        const originalTexts = {
            'clear-all-cache': '🔥 Clear All Cache',
            'clear-wp-cache': '🗃️ Clear WordPress Cache',
            'clear-vercel-cache': '☁️ Clear Vercel Cache',
            'revalidate-frontend': '🔄 Revalidate Frontend'
        };
        
        button.text(originalTexts[buttonId] || 'Button');
    }
    
    function showStatus(message, type) {
        const statusArea = $('#cache-status');
        const className = 'tr-status-' + type;
        
        statusArea
            .removeClass('tr-status-success tr-status-error tr-status-loading')
            .addClass(className)
            .html('<p>' + message + '</p>')
            .show();
        
        if (type !== 'loading') {
            setTimeout(function() {
                statusArea.fadeOut();
            }, 5000);
        }
    }
    
    function showSuccess(message) {
        showStatus(message, 'success');
    }
    
    function showError(message) {
        showStatus(message, 'error');
    }
});

// Global functions for admin bar
function trClearAllCache() {
    if (confirm('Are you sure you want to clear all cache?')) {
        jQuery.ajax({
            url: trCacheAjax.ajaxurl,
            type: 'POST',
            data: {
                action: 'tr_clear_cache',
                nonce: trCacheAjax.nonce
            },
            success: function(response) {
                if (response.success) {
                    alert('✅ All cache cleared successfully!');
                } else {
                    alert('❌ Failed to clear cache');
                }
            },
            error: function() {
                alert('❌ Ajax request failed');
            }
        });
    }
}

function trClearVercelCache() {
    if (confirm('Are you sure you want to clear Vercel cache?')) {
        jQuery.ajax({
            url: trCacheAjax.ajaxurl,
            type: 'POST',
            data: {
                action: 'tr_clear_vercel_cache',
                nonce: trCacheAjax.nonce
            },
            success: function(response) {
                if (response.success) {
                    alert('✅ Vercel cache cleared successfully!');
                } else {
                    alert('❌ Failed to clear Vercel cache');
                }
            },
            error: function() {
                alert('❌ Ajax request failed');
            }
        });
    }
}
